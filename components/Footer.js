import Link from "next/link"

export default function Footer({ props }) {
    <Link href='#'>Polityka prywantości</Link>
    return <span className="text-neutral-500 block text-sm text-center m-6" {...props}>
        <Link href='/privacy-policy' className="text-xs mr-2">Polityka Prywatności</Link><Link href='/contact' className="text-xs">Kontakt</Link>

        <br /> © 2021 - 2024 Promly - Wszelkie prawa zastrzeżone.
        <br />
        {/* <span className="text-xs mt-2"> Created and developed by <a href="http://krauza.tech" target="_blank" className="text-blue-600 hover:underline font-mono">krauza.tech</a></span> */}

    </span>
}