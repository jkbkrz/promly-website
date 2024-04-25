export default function Page() {
    return (
        <main className="px-5">
            <h1 className="disable-select font-heading font-bold tracking-tighter text-black dark:text-white text-center my-10" style={{
                fontSize: "clamp(30px, 7vw, 60px)"
            }}>Usuń konto</h1>

            <p className="mx-auto text-center text-neutral-500 max-w-5xl">Aby usunąć konto, należy wysłać prośbę za pośrednictwem adresu e-mail, który został użyty do utworzenia konta na adres mailowy - kontakt@promly.pl. Jeśli potrzebujesz pomocy, możesz skontaktować się z nami poprzez powyższy e-mail. Chętnie pomożemy w każdy możliwy sposób.</p>
        </main>
    )
}