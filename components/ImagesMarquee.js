'use client'
import Marquee from "react-fast-marquee"
import Image from "next/image"

export default function ImagesMarquee({ props }) {
    return (
        <div className="my-12 sm:my-16 relative left-1/2" style={{ transform: "translate(-50%, 0)", width: "120vw", maxWidth: "1840px" }} {...props}>
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
                <ImageTile src='/squares/square2_1.png' />
                <ImageTile src='/squares/square2_2.png' />
                <ImageTile src='/squares/square2_3.png' />
                <ImageTile src='/squares/square2_4.png' />
                <ImageTile src='/squares/square2_5.png' />
                <ImageTile src='/squares/square2_6.png' />
                <ImageTile src='/squares/square2_7.png' />
                <ImageTile src='/squares/square2_8.png' />

            </Marquee >
        </div>
    )
}

const ImageTile = ({ src }) => {
    return <Image
        src={src}
        width={256}
        height={256}
        className="w-32 h-32 m-1 sm:w-44 sm:h-44 sm:m-2"
    />
}