export default function Hero() {
    return <div className="mx-auto max-w-screen-xl my-10 sm:mb-16 sm:mt-16 text-center">
        <h1 className="disable-select font-heading font-bold tracking-tighter text-black dark:text-white leading-none" style={{
            fontSize: "clamp(30px, 10.9vw, 100px)"
        }}>
            Okazje w jednym <br /> miejscu z Promly
        </h1>
        <span className="text-neutral-400 mt-5 block text-sm sm:text-base">Wyszukiwarka promocji streetwearowych</span>
    </div>
}