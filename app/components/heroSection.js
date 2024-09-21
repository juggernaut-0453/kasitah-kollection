import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, User, Box, CreditCard, HeadphonesIcon } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
      <header className="pr-ti pl-ti container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4A2512] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold">Clothing.</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'Shop', 'Women', 'Men', 'Accessories', 'About Us', 'Contact Us', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-gray-600" />
          <Heart className="w-6 h-6 text-gray-600" />
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      <main className="">
        <div className="flex items-center bg-gray-200 justify-between pr-ti pl-ti">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-400 p-1 rounded">
                <Box className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">50% OFF Summer Super Sale</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Step into Style: Your Ultimate Fashion Destination</h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <Link
              href="/shop"
              className="bg-[#4A2512] text-white px-6 py-3 rounded inline-flex items-center space-x-2 hover:bg-[#3A1D0E] transition-colors"
            >
              <span>Shop Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Woman with sunglasses and camera"
              width={600}
              height={600}
              className="rounded-lg"
            />
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
              <div className="bg-yellow-400 rounded-full p-4 w-24 h-24 flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Sunglasses"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pr-ti pl-ti grid grid-cols-1 justify-items-stretch gap-6 md:grid-cols-3 mt-16">
          {[
            { icon: Box, title: 'Free Shipping', description: 'Free shipping for order above $180' },
            { icon: CreditCard, title: 'Flexible Payment', description: 'Multiple secure payment options' },
            { icon: HeadphonesIcon, title: '24x7 Support', description: 'We support online all days' },
          ].map((feature, index) => (
            <div key={index} className="flex justify-center items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <feature.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


