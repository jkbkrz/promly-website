export default function TestCard({ product }) {
    return <div className="p-2 bg-blue-200 bg-opacity-30 h-96 my-2">
        {product.name}
        <span className="text-lg text-red-500">{product._id}</span>
        <br />
        <span className="text-lg text-green-500">{product.searchScore}</span>
        <br />
        <span className="text-lg text-pink-500">{product.price}</span>
    </div>
}