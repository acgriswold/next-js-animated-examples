import { getCurrentExperiment, getCurrentVariant, CurrentExperiment} from '@/lib/examples/ab-testing/experiments'
import { config as experiment_config } from "@/lib/examples/ab-testing/config"

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export const config = {
    matcher: '/examples/ab-testing/:path*',
  }

export function middleware(request: NextRequest) {
    let cookie = request.cookies.get(experiment_config.AB_TESTING_COOKIE_NAME)?.value

    if (!cookie) {
      const experiment = getCurrentExperiment<CurrentExperiment>()
      const variant = getCurrentVariant(experiment)
        
      cookie = `${experiment.id}.${variant.id}`
    }
    
    const res = NextResponse.next()
  
    // Add the cookie if it's not there
    if (!request.cookies.has(experiment_config.AB_TESTING_COOKIE_NAME)) {
      res.cookies.set(experiment_config.AB_TESTING_COOKIE_NAME, cookie)
    }
  
    return res
  
}
 

