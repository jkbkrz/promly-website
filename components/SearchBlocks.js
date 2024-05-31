"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card } from "./ui/card"
import { Separator } from "./ui/separator"
import { CategoryCombbox } from "./CategoryCombobox"
import { useState } from "react"
import { categoryData, cn, stores } from "@/lib/utils"
import { useRouter } from "next/navigation"

const defaultInitialData = {
    category: "",
    gender: "",
    query: "",
    size: "",
    color: "",
    fit: "",
    style: "",
    store: "",
};


export const SearchBlocks = ({ className, initialData = defaultInitialData, ...props }) => {
    const router = useRouter()
    const [request, setRequest] = useState(initialData)

    const onSubmit = () => {
        const filteredRequest = Object.entries(request)
            .filter(([key, value]) => value !== null && value !== undefined)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});

        const queryString = new URLSearchParams(filteredRequest).toString();

        router.push(`/s?${queryString}`);
    }

    return (
        <div className={cn("flex flex-col gap-6 items-center", className)} {...props}>
            <Card className="flex flex-col align-middle w-full max-w-2xl p-2  shadow-lg sm:rounded-full border sm:border-2 dark:shadow-none">
                <div className="flex flex-col items-center sm:flex-row gap-2">
                    <div className="gap-2 w-full sm:w-auto flex flex-row items-center">
                        <CategoryCombbox initialValue={initialData.category} onChange={(value) => setRequest(prevState => ({ ...prevState, category: value }))} />
                        <Separator orientation="vertical" className="sm:h-8" />
                        <Select value={request.gender} onValueChange={(value) => setRequest(prevState => ({ ...prevState, gender: value }))}>
                            <SelectTrigger className="w-full sm:w-[130px] h-12 hover:bg-neutral-500/10 sm:rounded-full focus:ring-transparent border sm:border-none">
                                <SelectValue placeholder="Płeć" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="female">Kobieta</SelectItem>
                                <SelectItem value="male">Mężczyzna</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Separator orientation="vertical" className="sm:h-8" />
                    <Input value={request.query} onChange={(e) => setRequest(prevState => ({
                        ...prevState, query: e.target.value
                    }))} className="h-12 hover:bg-neutral-500/10 sm:rounded-full focus-visible:ring-transparent border sm:border:none" placeholder="Marka lub model (opcjonalnie)" />
                    <Button onClick={onSubmit} className="sm:w-12 sm:h-12 sm:rounded-full w-full bg-gradient-to-t from-lime-500 via-lime-400 to-lime-300">
                        <SearchIcon />
                    </Button>
                </div>
            </Card>

            <div className="flex flex-wrap justify-center gap-1.5 items-start">
                <Select value={request.size} onValueChange={(value) => setRequest(prevState => ({
                    ...prevState, size: value
                }))}>
                    <SelectTrigger className="w-[120px] h-9 rounded-full  focus:ring-transparent">
                        <SelectValue placeholder="Rozmiar" />
                    </SelectTrigger>
                    <SelectContent>
                        {categoryData.sizes.map((size) =>
                            <SelectItem value={size.value}>{size.label}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                <Select value={request.color} onValueChange={(value) => setRequest(prevState => ({
                    ...prevState, color: value
                }))}>
                    <SelectTrigger className="w-[120px] h-9 rounded-full  focus:ring-transparent">
                        <SelectValue placeholder="Kolor" />
                    </SelectTrigger>
                    <SelectContent>
                        {categoryData.colors.map((color) =>
                            <SelectItem value={color.value}>{color.label}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                <Select value={request.fit} onValueChange={(value) => setRequest(prevState => ({
                    ...prevState, fit: value
                }))}>
                    <SelectTrigger className="w-[120px] h-9 rounded-full  focus:ring-transparent">
                        <SelectValue placeholder="Fason" />
                    </SelectTrigger>
                    <SelectContent>
                        {categoryData.fits.map((fit) =>
                            <SelectItem value={fit.value}>{fit.label}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                <Select value={request.style} onValueChange={(value) => setRequest(prevState => ({
                    ...prevState, style: value
                }))}>
                    <SelectTrigger className="w-[120px] h-9 rounded-full  focus:ring-transparent">
                        <SelectValue placeholder="Styl" />
                    </SelectTrigger>
                    <SelectContent>
                        {categoryData.styles.map((style) =>
                            <SelectItem value={style.value}>{style.label}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                <Select value={request.store} onValueChange={(value) => setRequest(prevState => ({
                    ...prevState, store: value
                }))}>
                    <SelectTrigger className="w-[120px] h-9 rounded-full  focus:ring-transparent">
                        <SelectValue placeholder="Sklep" />
                    </SelectTrigger>
                    <SelectContent>
                        {stores.map((style) =>
                            <SelectItem value={style.value}>{style.label}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}