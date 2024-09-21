import Image from 'next/image'

const categories = [
  {
    title: "For Women's",
    items: "2500+ Items",
    image: "/placeholder.svg?height=600&width=400",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    subcategories: ["Blazers", "T-Shirts and Blouses", "Dresses", "Jackets & Coats", "Jeans", "Knit", "Sarees"]
  },
  {
    title: "For Men's",
    items: "1500+ Items",
    image: "/placeholder.svg?height=300&width=400",
    subcategories: ["Blazers", "T-Shirts and Shirts", "Jackets & Coats", "Jeans"]
  },
  {
    title: "Accessories",
    items: "800+ Items",
    image: "/placeholder.svg?height=300&width=400",
    subcategories: ["Handbags", "Watches", "Sunglasses", "Hat"]
  }
]

export default function CategoryLayout() {
  return (
    <div className=" pt-ti pb-8 bg-red-300 h-[800px] w-full">
      <div className="pr-ti pl-ti grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="bg-gray-200 flex p-4 flex-col rounded-md md:col-span-2 items-stretch lg:col-span-1 lg:row-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 mb-2">{categories[0].items}</p>
              <h2 className="text-3xl font-bold mb-4">{categories[0].title}</h2>
              <p className="text-gray-600 mb-4">{categories[0].description}</p>
            </div>
          </div>
          <ul className="space-y-2 mb-6">
            {categories[0].subcategories.map((subcategory, index) => (
              <li key={index} className="text-gray-700">{subcategory}</li>
            ))}
          </ul>
          <div className="relative flex-grow overflow-hidden">
            <Image
              src={categories[0].image}
              alt={categories[0].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        {categories.slice(1).map((category, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-md flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-600 mb-2">{category.items}</p>
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex} className="text-gray-700">{subcategory}</li>
              ))}
            </ul>
            <div className="relative flex-grow overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}