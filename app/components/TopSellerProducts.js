'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Heart, Maximize2, ShoppingBag, Star } from 'lucide-react'

const categories = ['All', 'Women', 'Men', 'Accessories']

const products = [
  {
    id: 1,
    name: 'Trendy Brown Coat',
    category: 'Coats',
    price: 75.00,
    originalPrice: 150.00,
    discount: '50% off',
    rating: 4.8,
    image: '/placeholder.svg?height=300&width=300',
    countdown: { days: 5, hours: 12, minutes: 30, seconds: 25 }
  },
  {
    id: 2,
    name: 'Classy Light Coat',
    category: 'Coats',
    price: 165.00,
    originalPrice: 220.00,
    discount: '25% off',
    rating: 4.9,
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 3,
    name: 'Modern Brown Dress',
    category: 'Dresses',
    price: 90.00,
    originalPrice: 100.00,
    discount: '10% off',
    rating: 4.8,
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 4,
    name: 'Modern Black Dress',
    category: 'Dresses',
    price: 75.00,
    originalPrice: 100.00,
    discount: '25% off',
    rating: 4.7,
    image: '/placeholder.svg?height=300&width=300'
  }
]

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          {product.discount}
        </span>
        <div className="absolute top-2 right-2 space-y-2">
          <button className="bg-white p-2 rounded-full shadow-md">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <Maximize2 className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <ShoppingBag className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        {product.countdown && (
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 text-black px-2 py-1 flex justify-around">
            <span>{product.countdown.days}d</span>
            <span>{product.countdown.hours}h</span>
            <span>{product.countdown.minutes}m</span>
            <span>{product.countdown.seconds}s</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-bold text-lg mt-1">{product.name}</h3>
        <div className="flex items-center mt-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-semibold">{product.rating}</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function TopSellerProducts() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-2">Our Top Seller Products</h2>
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? 'bg-brown-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}