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
                <Button onClick={() => { navigator.clipboard.writeText(placeholder) }}>Skopiuj</Button>
            </div>
        </div>
    )
}