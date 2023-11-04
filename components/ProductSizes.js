import { Badge } from "@/components/ui/badge"

const ProductSizes = ({ sizes }) => {
    const sortedSizes = sizes.sort(
        (a, b) => new Date(b.lastUpdatedAt) - new Date(a.lastUpdatedAt)
    )

    const mostRecentSizes = sortedSizes.slice(0, 3)

    const getColorCode = (lastUpdatedAt) => {
        const twoDays = 2 * 24 * 60 * 60 * 1000 // 2 days in milliseconds
        const fiveDays = 5 * 24 * 60 * 60 * 1000 // 5 days in milliseconds
        const now = new Date().getTime()
        const updatedAt = new Date(lastUpdatedAt).getTime()
        const timeDifference = now - updatedAt

        if (timeDifference < twoDays) {
            return 'green'
        } else if (timeDifference >= twoDays && timeDifference <= fiveDays) {
            return 'yellow'
        } else {
            return 'red'
        }
    };

    const formatDateToTimeAgo = (dateString) => {
        const currentDate = new Date()
        const pastDate = new Date(dateString)
        const timeDifference = currentDate - pastDate
        const secondsDifference = Math.floor(timeDifference / 1000)

        if (secondsDifference < 60) {
            return `${secondsDifference}s`
        } else if (secondsDifference < 3600) {
            const minutesDifference = Math.floor(secondsDifference / 60);
            return `${minutesDifference}m`
        } else if (secondsDifference < 86400) {
            const hoursDifference = Math.floor(secondsDifference / 3600);
            return `${hoursDifference}h`
        } else {
            const daysDifference = Math.floor(secondsDifference / 86400);
            return `${daysDifference}d`
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-500">Aktualność popularnych rozmiarów:</span>
            <ul className="flex flex-row flex-wrap gap-1">
                {mostRecentSizes.map((item, index) => (
                    <Badge key={index}>{item.size.toUpperCase()}/{formatDateToTimeAgo(item.lastUpdatedAt)}</Badge>
                    // <li
                    //     key={index}
                    //     className={`relative inline-block rounded-md  px-1.5 font-mono text-black dark:text-white border dark:border-neutral-700 border-black border-opacity-10 ${getColorCode(item.lastUpdatedAt) === 'green'
                    //         ? 'text-opacity-100'
                    //         : getColorCode(item.lastUpdatedAt) === 'yellow'
                    //             ? 'dark:text-opacity-60 text-opacity-60'
                    //             : 'dark:text-opacity-25 text-opacity-25'
                    //         }`}
                    // >
                    //     <span className="text-xs">{item.size.toUpperCase()}/<span style={{ fontSize: 10 }}>{formatDateToTimeAgo(item.lastUpdatedAt)}</span></span>
                    // </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductSizes;