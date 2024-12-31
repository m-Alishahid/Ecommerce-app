"use client";

import React from "react";
import Image from "next/image";
import { FaEye, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa"; // Corrected imports

const products = [
    {
        title: "Paracetamol 500mg Tablets",
        price: "$5",
        oldPrice: "$7",
        image: "/paracetamol.png",
        rating: 5,
        reviews: "150",
    },
    {
        title: "Cough Syrup (100ml)",
        price: "$10",
        oldPrice: "$12",
        image: "/cough_syrup.png",
        rating: 4,
        reviews: "95",
    },
    {
        title: "Vitamin C Capsules (30 Pack)",
        price: "$15",
        oldPrice: "$18",
        image: "/vitamin_c.png",
        rating: 4,
        reviews: "120",
    },
    {
        title: "Antibacterial Ointment (50g)",
        price: "$8",
        oldPrice: null,
        image: "/ointment.png",
        rating: 5,
        reviews: "80",
    },

    {
        title: "Risek Capsules (20mg)",
        price: "$12",
        oldPrice: "$14",
        image: "/risek_capsules.png",
        rating: "4",
        reviews: "220",
    },
    {
        title: "Abbott Diphenhydramine Tablets (25mg)",
        price: "$7",
        oldPrice: "$9",
        image: "/abbott_diphenhydramine.png",
        rating: "5",
        reviews: "185",
    },
    {
        title: "ATCO Amlodipine Tablets (5mg)",
        price: "$5",
        oldPrice: "$6",
        image: "/atco_amlodipine.jpg",
        rating: "4",
        reviews: "145",
    },
    {
        title: "Abbott Amoxicillin Capsules (500mg)",
        price: "$10",
        oldPrice: "$12",
        image: "/abbott_amoxicillin.png",
        rating: "5",
        reviews: "180",
    },
    {
        title: "GetsPharma Pregabalin (150mg)",
        price: "$4",
        oldPrice: "$6",
        image: "/getsparma_paracetamol.png",
        rating: "5",
        reviews: "150",
    },
    // More products...
];

const ProductBox = ({ product }: { product: any }) => (
    <div className="w-full sm:w-[220px] md:w-[250px] lg:w-[270px] xl:w-[300px] mb-6">
        <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center relative cursor-pointer">
            <Image src={product.image} width={150} height={100} alt={product.title} />
            <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                <span className="text-2xl text-black rounded-full p-1 bg-white">
                    <FaRegHeart />
                </span>
                <span className="text-2xl text-black rounded-full p-1 bg-white">
                    <FaEye />
                </span>
            </div>
            <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
            </button>
        </div>
        <h1 className="font-bold font-sans pt-2">{product.title}</h1>
        <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold">{product.price}</span>
            {product.oldPrice && (
                <span className="text-gray-400 font-bold line-through">{product.oldPrice}</span>
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
            <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
        </div>
    </div>
);

const Products2 = () => {
    const [viewAll, setViewAll] = React.useState(false);

    const handleViewAll = () => {
        setViewAll(!viewAll);
    };

    return (
        <main>
            <div className="w-full flex justify-center items-center mt-10 mb-1">
                <div className="w-[80%]">
                    <div className="flex flex-col">
                        <h3 className="text-blue-500 font-bold border-l-8 border-blue-600 pl-3 ml-1">Explore</h3>
                        <div className="flex justify-between">
                            <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl pt-4">Our Medicines</h1>
                            <button
                                onClick={handleViewAll}
                                className="bg-blue-500 hover:bg-blue-700 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white rounded-sm h-10 mt-3 pt-2"
                            >
                                {viewAll ? "Show Less" : "View All"}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between mt-5 gap-y-5">
                        {products.slice(0, viewAll ? products.length : 4).map((product, index) => (
                            <ProductBox key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Products2;
