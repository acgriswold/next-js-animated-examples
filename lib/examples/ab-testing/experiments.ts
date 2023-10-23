import * as _ from "lodash"

import { cn } from '../../utils'

export type Variant<T> = {
    name: string,
    id: number,
    weight: number,
    values: T
}

export type Experiment<T> = {
    name: string,
    base?: T,
    id: string,
    variants: Variant<T>[]
}

const experiments: Experiment<unknown>[] = [
    {
      name: "Button sales v color variation",
      id: "MFY6FYIySra93KqA3vs9UQ",
      base: {
        className: "py-4 px-8 rounded-md border-2"
      },
      variants: [
        {
          name: "original",
          id: 0,
          weight: 33.33,
          values: {
            className: "bg-gray-700 border-gray-600"
          }
        },
        {
          name: "Variant 1",
          id: 1,
          weight: 33.33,
          values: {
            className: "text-xs bg-red-500 border-red-300"
          }
        },
        {
          name: "Variant 2",
          id: 2,
          weight: 33.33,
          values: {
            className: "text-lg bg-violet-500 border-violet-400"
          }
        }
      ]
    }
  ]

  
export type CurrentExperiment = { className: string };

/**
 * Grabs the expected experiment based on the current user.  Determines whether the user
 * has been recently exposed and the proper experiment based on use context.
 * 
 * - Create experiment using the desired platform
 * - Map experiment to expected paths, in the this case examples/ab-testing/[variant]
 * - Start experimenting and then make decisions without having changed the original pages
 * @returns the experiment to use
 */
export function getCurrentExperiment<T>() : Experiment<T> {
    const isMatch = (exp: Experiment<any>): exp is Experiment<T> => {
        const required:T = {}
        const requiredValues = Object.keys(required)
        const testingValues = exp.variants.find(v => v.values)?.values

        return requiredValues.every(prop => testingValues[prop] !== undefined);
    }

    const match = experiments.find(exp => {
        return isMatch(exp)
    })

    if (match && isMatch(match))
        return match

    throw new Error('🚨: No experiment found matching type')
}

export function getCurrentVariant<T>(experiment: Experiment<T>): Variant<T> {
    let n = Math.random() * 100
    const variant = experiment.variants.find((v, i) => {
        if (v.weight >= n) return true
        n -= v.weight
      })
    
    if (!variant)
      throw new Error(`🚨: No variants found on experiment ${experiment.name}`)
    
    if (experiment.base?.className && variant.values.className)
      return _.merge({values: experiment.base}, variant, {values: {className: cn(experiment.base.className, variant.values.className)}})
    
    return _.merge({values: experiment.base}, variant)
}



export function getExperimentValues<T>(keyPair: string): T {
    const isMatch = (values: any): values is T => {
        const required:T = {}
        const requiredValues = Object.keys(required)

        return requiredValues.every(prop => values[prop] !== undefined);
    }

    const [experimentKey, variantKeyString] = keyPair.split(".")
    const variantKey = parseInt(variantKeyString);

    const experiment = experiments.find(e => e.id === experimentKey)
    if (!experiment)
        throw new Error(`🚨: no experiment found for key: ${experimentKey}`)

    const variant = experiment.variants.find(v => v.id === variantKey)
    if (!variant)
        throw new Error(`🚨: no variant found for key ${variantKey} found on experiment: ${experimentKey}`)

    if (!isMatch(variant.values))
      throw new Error(`🚨: no matching type for values try ${typeof variant.values}`)

    if (experiment.base?.className && variant.values.className)
      return _.merge(experiment.base, variant.values, {className: cn(experiment.base.className, variant.values.className)})
    
    return _.merge(experiment.base, variant.values)
}



export function getExperimentVariant<T>(keyPair: string): Variant<T> {
  const isMatch = (variant: Variant<any>): variant is Variant<T> => {
      const required:T = {}
      const requiredValues = Object.keys(required)

      return requiredValues.every(prop => variant.values[prop] !== undefined);
  }

  const [experimentKey, variantKeyString] = keyPair.split(".")
  const variantKey = parseInt(variantKeyString);

  const experiment = experiments.find(e => e.id === experimentKey)
  if (!experiment)
      throw new Error(`🚨: no experiment found for key: ${experimentKey}`)

  const variant = experiment.variants.find(v => v.id === variantKey)
  if (!variant)
      throw new Error(`🚨: no variant found for key ${variantKey} found on experiment: ${experimentKey}`)

  if (!isMatch(variant))
    throw new Error(`🚨: no matching type for values try ${typeof variant.values}`)

  if (experiment.base?.className && variant.values.className)
    return _.merge({values: experiment.base}, variant, {values: {className: cn(experiment.base.className, variant.values.className)}})
  
    return _.merge({values: experiment.base}, variant)
}