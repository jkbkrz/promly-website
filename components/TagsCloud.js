const colors = [
    "czarny", "biały", "szary", "beżowy", "brązowy", "niebieski", "czerwony", "pomarańczowy", "żółty", "zielony", "różowy",
]

const fits = ["regularny", "dopasowany / slim / wąski", "oversize / luźny"]

const styles = ["klasyczny", "minimalistyczny", "sportowy", "vintage", "elegancki"]

const seasons = ["wiosna", "lato", "jesień", "zima"]

const tshirtsSubcategories = [
    "t-shirt", "top", "tank top", "longsleeve / koszulka z dlugim rękawem", "koszulka polo"
];

const hoodiesSubcategories = [
    "bluza z kapturem", "bluza", "bluza rozpinana", "sweter", "polar"
];

const pantsSubcategories = [
    "spodnie", "cargo / bojówki", "jeansy", "chinosy", "szorty / spodenki", "legginsy", "spodnie dresowe", "rurki"
];

const shoesSubcategories = [
    "sneakersy / buty sportowe", "sandały", "trampki", "mokasyny", "klapki", "sandały", "botki"
];

const allSubcategories = [
    ...colors,
    ...fits,
    ...seasons,
    ...styles,
    ...tshirtsSubcategories,
    ...hoodiesSubcategories,
    ...pantsSubcategories,
    ...shoesSubcategories
];

const TagsCloud = () => {
    return (
        <ul className="flex flex-wrap justify-center max-w-5xl gap-2 py-12 px-8">
            {allSubcategories.map((subcategory, index) => (
                <li key={index} className="text-center px-2 py-1 text-xs sm:text-sm relative  flex justify-center items-center bg-neutral-500/10 rounded-full select-none">
                    <span className="dark:text-white">
                        {subcategory}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default TagsCloud;
