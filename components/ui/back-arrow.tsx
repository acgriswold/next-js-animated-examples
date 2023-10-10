"use client"

import { useRouter } from "next/navigation"
import { Icons } from "../global/icons"
import React from "react"

export type BackArrowProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function BackArrow({ onClick, ...props }: BackArrowProps) {
    const router = useRouter()

    return (
        <button {...props} 
            type="button" 
            onClick={(e) => onClick?(e):router.back()}>
                
            <Icons.back />
        </button>
    )
}