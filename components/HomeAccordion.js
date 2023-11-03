'use client'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion"

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}
                <img
                    className={`ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"
                        }`}
                    src='chevron-down.svg'
                    alt="Chevron"
                />
            </>
        )}
        className="border-b"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left hover:bg-gray-100 ${isEnter && "bg-gray-200"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{ className: "p-4" }}
    />
)

export default function HomeAccordion() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <span className="mb-4 block text-black text-sm sm:text-base">Najczęściej zadawane pytania</span>
            <Accordion transition transitionTimeout={250} className="text-start">
                <AccordionItem header="Jak działa Promly?">
                    Promly zbiera wszystkie promocje z największych sklepów internetowych w Polsce, a następnie serwuje je w jednym miejscu sortując od najbardziej okazyjnych, oszczędzając wiele czasu uytkownikom na ręczne odwiedzanie wszystkich stron.
                </AccordionItem>

                <AccordionItem header="Co wpływa na kolejność okazji?">
                    Na kolejność promocji wpływa m.in. zaangażowanie jaka dana promocja wywołuje (kliknięcia, udostępnienia), czas od dodania oraz wewnętrzny system oceny poszczególnych sklepów.
                </AccordionItem>

                <AccordionItem header="Jak często aktualizowanę są promocje?">
                    Promocje w Promly są aktualizowane kilka razy dziennie, aby zapewnić ich jak najbardziej aktualny status.
                </AccordionItem>

                <AccordionItem header="Z jakich sklepów są pozyskiwane promocje?">
                    Listę aktualnie obsługiwanych sklepów prez Promly znajdziesz na stronie:  <a href="#" className="text-blue-500 align-m">Lista obsługiwanych sklepów przez Promly
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800"
                            height="800"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="ml-1 w-4 h-4 inline-block"
                        >
                            <path
                                d="M20.293 9.707A1 1 0 0022 9V3a1 1 0 00-1-1h-6a1 1 0 00-.707 1.707l1.94 1.94-6.647 6.646a1 1 0 000 1.414l.707.707a1 1 0 001.414 0l6.647-6.646 1.939 1.94z"
                            ></path>
                            <path
                                d="M4.5 8a.5.5 0 01.5-.5h5.063a1 1 0 001-1v-1a1 1 0 00-1-1H5A3.5 3.5 0 001.5 8v11A3.5 3.5 0 005 22.5h11a3.5 3.5 0 003.5-3.5v-5.062a1 1 0 00-1-1h-1a1 1 0 00-1 1V19a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V8z"
                            ></path>
                        </svg>

                    </a>


                </AccordionItem>
            </Accordion>
        </div>
    )
}