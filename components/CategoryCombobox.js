"use client"

import { Check, ChevronsUpDown, ShirtIcon } from "lucide-react"

import { Button } from "./ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover"
import { cn, hoodiesSubcategories, pantsSubcategories, shoesSubcategories, tshirtsSubcategories } from "@/lib/utils"
import { useState } from "react"

const data = [
    ...tshirtsSubcategories,
    ...hoodiesSubcategories,
    ...pantsSubcategories,
    ...shoesSubcategories
]

export const CategoryCombbox = ({ initialValue, onChange }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(initialValue)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full sm:w-fit border sm:border-none justify-start h-12 hover:bg-neutral-500/10 sm:rounded-full focus:ring-transparent"
                >
                    <ShirtIcon fill={true} className="mr-4 h-4 w-4 shrink-0 opacity-50" />
                    {value
                        ? data.find((cat) => cat.value === value)?.label
                        : "Kategoria"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command value={value} >
                    <CommandInput placeholder="Wyszukaj kategorie..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {data.map((cat) => (
                                <CommandItem
                                    key={cat.label}
                                    value={cat.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)

                                        onChange(currentValue)

                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === cat.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {cat.label}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
