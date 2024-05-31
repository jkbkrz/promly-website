export const MotionHero = () => {


    return <div className=" mb-10 flex flex-col items-center">
        <h2
            className="bg-gradient-to-br text-transparent from-black to-stone-500 dark:from-white dark:to-stone-200 bg-clip-text font-display leading-none tracking-tighter font-bold  text-center animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out fill-mode-both"
            style={{
                fontSize: "clamp(30px, 10vw, 70px)",
                // animationFillMode: "forwards"
                animationDelay: "0.20s",
            }}
        >
            Okazje w jednym <br />  miejscu z Promly
        </h2>
        <p
            className="mt-6 animate-fade-up text-center text-neutral-500 text-balance md:text-xl md:max-w-2xl max-w-lg  animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out fill-mode-both"
            style={{ animationDelay: "0.35s", }}
        >
            Przeszukaj tysiące modowych promocji z największych polskich sklepów, oszczędzając multum czasu.
        </p>
    </div>
}