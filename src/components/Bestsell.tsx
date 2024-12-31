






import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const products = [
    {
        title: "Paracetamol 500mg Tablets",
        price: "$5",
        oldPrice: "$7",
        image: "/paracetamol.png",
        rating: "5",
        reviews: "150",
    },
    {
        title: "Cough Syrup (100ml)",
        price: "$10",
        oldPrice: "$12",
        image: "/cough_syrup.png",
        rating: "4",
        reviews: "95",
    },
    {
        title: "Vitamin C Capsules (30 Pack)",
        price: "$15",
        oldPrice: "$18",
        image: "/vitamin_c.png",
        rating: "4",
        reviews: "120",
    },
    {
        title: "Antibacterial Ointment (50g)",
        price: "$8",
        oldPrice: null,
        image: "/ointment.png",
        rating: "5",
        reviews: "80",
    }
];

const ProductBox = ({ product }: { product: any }) => (
    <div>
        <div className="group shadow-md bg-neutral-100 w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={150} height={100} alt={product.title} />
            <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
              <span className="text-2xl text-black rounded-full p-1 bg-white"><FaRegHeart  /></span>
                <span className="bg-white"><FaEye  /></span>
            </div>
            <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
                Add to Cart
            </button>
        </div>
        <h1 className="font-bold font-sans pt-2">{product.title}</h1>
        <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold">{product.price}</span>
            {product.oldPrice && (
                <span className="text-grey-400 font-bold line-through">{product.oldPrice}</span>
            )}
        </div>
        <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
            {[...Array(5)].map((_, index) =>
                index < product.rating ? (
                    <FaStar key={index} />
                ) : (
                    <FaRegStar key={index} />
                )
            )}
            <span className="text-grey-400 text:sm ml-1">{product.reviews}</span>
        </div>
    </div>
);

const Products = () => {
    return (
        <main>
            <div className="w-full flex justify-center items-center mt-10 mb-1">
                <div className="w-[80%]">
                    <div className="flex flex-col">
                        <h3 className="text-blue-500 font-bold border-l-8 border-blue-600 pl-3 ml-1">This Month</h3>

                        <div className="flex justify-between">
                            <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl pt-4">Best Selling </h1>
                            <a href="#products"
                                className="bg-blue-500 hover:bg-blue-700 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white rounded-sm h-10 mt-3 pt-2">
                                View All
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between mt-5 gap-y-5">
                        {products.map((product, index) => (
                            <ProductBox key={index} product={product} />
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Products;
