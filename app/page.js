'use client'
import Image from "next/image"
import Link from "next/link"
import { bgimage } from "./api/bgimage"

export default function Main() {
  return (
    <div className="container mx-auto p-8">

      <div className="mx-32 my-32 flex flex-col items-center md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <p className="font-sans font-bold">ОБУВАЙСЯ СТИЛЬНО С</p> 
          <h1 className="text-4xl text-red-500 font-sans font-bold">NEVERLAND</h1>
          <br />
          <p className="font-sans font-bold text-xl">Вас ждет огромный выбор кроссовок на любой вкус! У нас представлены модели от ведущих мировых брендов, сочетающие стиль и комфорт. Независимо от того, ищете ли вы обувь для повседневной жизни, спорта или особенных мероприятий, у нас найдутся кроссовки, которые идеально дополнят ваш образ. Оцените наше разнообразие цветов, дизайнов и размеров, и найдите свою идеальную пару!</p>
          <br />
          <p className="text-center font-sans font-bold text-2xl">Перейти в</p>
          <br/>
          <div className="flex justify-center">
            <Link href='/catalog'>
              <p className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">КАТАЛОГ</p>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
          {bgimage.map((sneacker, index) => (
            <Image key={index} className="bg-cover ml-4" src={sneacker.backgroundImage} width={400} height={400} alt={`Sneacker ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
