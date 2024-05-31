'use client'
import Marquee from "react-fast-marquee"
import Image from "next/image"

export default function ImagesMarquee({ props }) {
    return (
        <div className="my-12 sm:my-16 relative" {...props}>
            <Marquee autoFill={true} gradientWidth={30} speed={25}>
                <ImageTile src='/squares/square1.png' />
                <ImageTile src='/squares/square2.png' />
                <ImageTile src='/squares/square3.png' />
                <ImageTile src='/squares/square4.png' />
                <ImageTile src='/squares/square5.png' />
                <ImageTile src='/squares/square6.png' />
                <ImageTile src='/squares/square7.png' />
                <ImageTile src='/squares/square8.png' />
            </Marquee >
            <Marquee autoFill={true} speed={25} gradientWidth={30} direction="right">
                <ImageTile bottom={true} src='/squares/square2_1.png' />
                <ImageTile bottom={true} src='/squares/square2_2.png' />
                <ImageTile bottom={true} src='/squares/square2_3.png' />
                <ImageTile bottom={true} src='/squares/square2_4.png' />
                <ImageTile bottom={true} src='/squares/square2_5.png' />
                <ImageTile bottom={true} src='/squares/square2_6.png' />
                <ImageTile bottom={true} src='/squares/square2_7.png' />
                <ImageTile bottom={true} src='/squares/square2_8.png' />

            </Marquee >
        </div>
    )
}

const ImageTile = ({ src, bottom }) => {
    return <Image
        src={src}
        width={64}
        placeholder="empty"
        height={64}
        className={`w-32 h-32 m-1 sm:w-32 sm:h-32 sm:m-2  animate-in fade-in ${bottom ? 'slide-in-from-bottom-4' : 'slide-in-from-top-4'} duration-1000 ease-in-out`}
    />
}