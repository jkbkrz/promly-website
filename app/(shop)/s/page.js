import { aiSearchProducts, searchProducts } from "@/actions"
import { PlaceholdersAndVanishInput } from "@/components/PlaceholderVanishInput"
import Search from "@/components/Search"
import { SearchBlocks } from "@/components/SearchBlocks"
import { SearchPlaceholder } from "@/components/SearchPlaceholder"
import SelectNavigation from "@/components/SelectNavigation"
import { TextGenerateEffect } from "@/components/text-generate-effect"
import { SelectItem } from "@/components/ui/select"
import { categories, sortOptions } from "@/lib/utils"
import LoadMore from "@/load-more"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"
import { AlertCircle, Terminal } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata = {
    title: 'Promly - Wyszukiwanie'
}

export default async function Page({ params, searchParams }) {
    const { products, data } = await aiSearchProducts({ searchParams })

    return (
        <main className="px-3 min-h-screen mt-6 pt-20 flex justify-start items-center flex-col" >
            {/* <SearchPlaceholder initialValue={decodeURIComponent(params.query)} /> */}
            <SearchBlocks initialData={searchParams} />
            <div className="mt-12" />

            <Card className="flex flex-row gap-4 w-full justify-start items-center max-w-5xl p-4 bg-purple-50 dark:bg-purple-500/15 shadow-purple-500/10 shadow-lg font-rubik">
                <Image src="/heart.png" width={64} height={64} className="self-center" />
                <span className="text-sm"><span className="font-medium">Nasza aplikacja jest wciąż we wczesnej fazie rozwoju.</span> Możesz napotkać błędy i niedociągnięcia przy kategoryzacji produktów. Wciąż pracujemy nad poprawą funkcjonalności i stabilności.</span>
            </Card>

            <div className="mt-6" />
            {/* <TextGenerateEffect words={words} /> */}

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

            <div className="w-full mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 max-w-5xl">
                {products}
            </div>


        </main>
    )
}