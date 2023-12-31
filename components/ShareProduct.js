"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ShareProduct({ placeholder, className, ...props }) {
    return (
        <div {...props} className={cn(className)}>
            <span className="text-xs text-neutral-500">Udostępnij produkt:</span>
            <div className="mt-1 flex w-full items-center space-x-2">
                <Input disabled value={placeholder} />
                <Button variant="outline" onClick={() => { navigator.clipboard.writeText(placeholder) }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="800"
                        height="800"
                        viewBox="0 0 1024 1024"
                        className="w-3 h-3 mr-1"
                    >
                        <path d="M768 832a128 128 0 01-128 128H192A128 128 0 0164 832V384a128 128 0 01128-128v64a64 64 0 00-64 64v448a64 64 0 0064 64h448a64 64 0 0064-64h64z"></path>
                        <path d="M384 128a64 64 0 00-64 64v448a64 64 0 0064 64h448a64 64 0 0064-64V192a64 64 0 00-64-64H384zm0-64h448a128 128 0 01128 128v448a128 128 0 01-128 128H384a128 128 0 01-128-128V192A128 128 0 01384 64z"></path>
                    </svg>
                    Skopiuj
                </Button>
            </div>
        </div>
    )
}