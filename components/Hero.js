export default function Hero({ props }) {
    return (
        <div className="mx-auto max-w-screen-xl my-10 sm:mb-10 sm:mt-16 text-center" {...props}>
            <h1 className="disable-select font-heading font-bold tracking-tighter text-black dark:text-white leading-none" style={{
                fontSize: "clamp(30px, 10vw, 70px)"
            }}>
                Okazje w jednym <br /> miejscu z Promly
            </h1>

            {/* <span className="text-neutral-500 mt-5 px-3 block text-xs sm:text-base max-w-2xl mx-auto">Wszystkie <span className=" text-neutral-800 font-semibold">
                największe promocje
            </span> odzieżowe ze sklepów w jednym miejscu - tutaj.
            </span> */}


        </div>
    )
}