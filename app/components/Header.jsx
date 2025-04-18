'use client'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { sneackers } from "../api/sneackers";

export default function Header() {
    
    return (
        <header className='p-3 container mx-auto flex justify-between items-center'>
            <div className="flex flex-grow justify-center">
                <ul className="flex flex-row gap-8 text-center">
                    <li className="hidden md:block">&#9776;</li>
                    <li><Link href="/">Главная</Link></li>
                    <li><Link href="/catalog">Каталог</Link></li>
                    <li><Link href="/delivery">Условия доставки</Link></li>
                </ul>
            </div>
            <div className="flex items-center">
                    <Link href="/basket" className="relative ml-4">
                        <span className=" absolute -top-2 -end-2 z-10 w-4 text-center text-xs text-white color-white rounded-full bg-red-500" >
                        </span>
                        <Image className="z-0" src="/shoppingbasket.png" width={24} height={24} alt="Shopping Basket" />
                    </Link>
            </div>
        </header>
    );
}
