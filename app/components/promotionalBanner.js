import Image from 'next/image'
import Link from 'next/link'

const promotions = [
  {
    title: "Men's Latest Collection",
    discount: "Flat 20% Discount",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/placeholder.svg?height=400&width=300",
    buttonText: "Shop Now",
    buttonColor: "bg-yellow-400 hover:bg-yellow-500",
    textColor: "text-gray-800",
    backgroundColor: "bg-white",
  },
  {
    title: "Women's Latest Fashion",
    discount: "Flat 25% Discount",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/placeholder.svg?height=400&width=300",
    buttonText: "Shop Now",
    buttonColor: "bg-brown-600 hover:bg-brown-700",
    textColor: "text-gray-800",
    backgroundColor: "bg-yellow-400",
  },
]

function PromotionBanner({ promotion }) {
  return (
    <div className={`${promotion.backgroundColor} ${promotion.textColor} p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between`}>
      <div className="mb-6 md:mb-0 md:mr-6 flex-1">
        <p className="text-sm font-semibold mb-2">{promotion.discount}</p>
        <h2 className="text-3xl font-bold mb-4">{promotion.title}</h2>
        <p className="mb-6">{promotion.description}</p>
        <Link href="#" className={`${promotion.buttonColor} text-white py-2 px-4 rounded inline-flex items-center`}>
          {promotion.buttonText}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <Image
          src={promotion.image}
          alt={promotion.title}
          width={300}
          height={400}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default function FashionPromotions() {
  return (
    <div className="container mx-auto px-4 py-8 bg-green-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promotions.map((promotion, index) => (
          <PromotionBanner key={index} promotion={promotion} />
        ))}
      </div>
    </div>
  )
}