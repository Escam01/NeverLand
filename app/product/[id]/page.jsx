'use client'
import { sneackers } from "@/app/api/sneackers";
import Image from "next/image";
import {Button} from "@/components/ui/button"
import Header from "@/app/components/Header"

export default function product({ params }) {
    let sneacker = sneackers.find((item) => {
        return item.id == params.id
    }) 
    const AddCard = (sneacker) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(sneacker);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload()
          
        
    }
    const OpenModal = () =>{
      const modal = document.getElementById('myModal')
      const spanClose = document.getElementById('close')
  
      modal.classList.remove('hidden')
      modal.classList.add('flex')
  
    }
  
    const CloseModal = () =>{
      const modal = document.getElementById('myModal')
      const spanClose = document.getElementById('close')
  
      modal.classList.remove('flex')
      modal.classList.add('hidden')
    }
      
    return (
        <div>
            <Header></Header>
        <div className="flex flex-row items-center h-full justify-evenly">
            <div className="max-h-96 flex">
            <Image src={sneacker.image} className="w-full h-full" width={300} height={300} alt="sneacker"/>
            </div>
            <div className="flex flex-col">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{sneacker.name}</h3>
            <h1 className="text-stone-900 font-mono scroll-m-20 text-xl tracking-tight">{sneacker.model}</h1>
            <p>{sneacker.price}$</p>
            <div className="flex flex-row gap-2">
                <Button className="focus:outline-none focus:ring focus:ring-gray-300">43</Button> 
                <Button className="focus:outline-none focus:ring focus:ring-gray-300">44</Button>
                <Button className="focus:outline-none focus:ring focus:ring-gray-300">45</Button>
                <Button className="focus:outline-none focus:ring focus:ring-gray-300">46</Button>
            </div>
            <button
                className="my-4 bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200" 
                onClick={() => {AddCard(sneacker); OpenModal()}}>
                Добавить в корзину
             </button>
            </div>
        </div>
        
        </div>
    )
}