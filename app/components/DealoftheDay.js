import Image from 'next/image'
import { Heart, Maximize2, ShoppingBag, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Stylist Dress',
    category: 'Dress',
    price: 75.00,
    originalPrice: 150.00,
    discount: '50% off',
    rating: 4.8,
    image: '/placeholder.svg?height=400&width=300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: 2,
    name: 'Modern Party Dress',
    category: 'Dress',
    price: 80.00,
    originalPrice: 100.00,
    discount: '20% off',
    rating: 4.9,
    image: '/placeholder.svg?height=400&width=300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: 3,
    name: 'Modern Coat',
    category: 'Coat',
    price: 80.00,
    originalPrice: 100.00,
    discount: '20% off',
    rating: 4.9,
    image: '/placeholder.svg?height=400&width=300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }
]

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-auto object-cover"
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          {product.discount}
        </span>
        <div className="absolute top-2 right-2 space-y-2">
          <button className="bg-white p-2 rounded-full shadow-md" aria-label="Add to wishlist">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md" aria-label="Expand view">
            <Maximize2 className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md" aria-label="Add to cart">
            <ShoppingBag className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-bold text-lg mt-1">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-semibold">{product.rating}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <button className="mt-4 text-blue-600 font-semibold flex items-center">
          Shop Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function DealsOfTheDay() {
    return (
      <div className="pb-4 bg-blue-500 h-[650px] mb-[8%] mt-[8%]">
        <div className="flex flex-col h-full pl-ti">
          <div className="mb-8 pr-ti">
            <span className="text-sm uppercase text-gray-300 mb-2 block">Today&apos;s Deals</span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Deals of the Day</h1>
              <p className="text-gray-200 max-w-md">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 flex-grow">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    )
  }