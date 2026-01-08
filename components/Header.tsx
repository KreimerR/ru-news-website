"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <div className="md:border-t-blue-900 md:border-b-black md:border-t-3 md:border-b-3">
      <div className="flex justify-between items-center py-5 px-3 md:px-0 md:border-b-black md:border-b">
        <div className="md:hidden" onClick={() => setMenu(true)}>
          <i className="fa-solid fa-bars hover:cursor-pointer" />
        </div>

        <Link href="/">
          <h1 className="text-md w-full text-center md:text-2xl font-bold lg:text-3xl">The Saint-Petersburg Times</h1>
        </Link>

        <div className="hidden md:flex md:flex-col md:justify-center md:items-end md:gap-1">
          <span className="text-lg">Поддержите The Saint-Petersburg Times</span>
          <button className="p-2 bg-yellow-300 font-bold text-sm hover:cursor-pointer">ПОДДЕРЖАТЬ</button>
        </div>

        <Link href="/search" className="md:hidden">
          <i className="fa-solid fa-magnifying-glass hover:cursor-pointer" />
        </Link>
      </div>

      <div className="hidden md:py-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-bars hover:cursor-pointer" onClick={() => setMenu(true)} />

          <ul className="list-none hidden lg:flex items-center gap-3 text-sm font-bold">
            <li>
              <Link href="/news">НОВОСТИ</Link>
            </li>

            <li>
              <Link href="/opinions">МНЕНИЯ</Link>
            </li>

            <li>
              <Link href="/society">ОБЩЕСТВО</Link>
            </li>

            <li>
              <Link href="/economics">ЭКОНОМИКА</Link>
            </li>

            <li>
              <Link href="/ecology">ЭКОЛОГИЯ</Link>
            </li>

            <li>
              <Link href="/archive">АРХИВ</Link>
            </li>
          </ul>
        </div>

        <Link href="/search">
          <i className="fa-solid fa-magnifying-glass hover:cursor-pointer" />
        </Link>
      </div>

      <div className="p-3 flex justify-between items-center md:hidden bg-yellow-300">
        <span className="text-[0.7rem] sm:text-[0.9rem] font-bold">Поддержите The Saint-Petersburg Times</span>
        <button className="py-2 px-5 bg-black text-white text-[0.7rem] font-bold hover:cursor-pointer">ПОДДЕРЖАТЬ</button>
      </div>

      {menu && (
        <div className="flex flex-col gap-10 fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,2,0.9)] z-10 py-10 px-10 md:px-20">
          <i className="fa-solid fa-xmark text-white text-2xl hover:cursor-pointer" onClick={() => setMenu(false)}></i>

          <div className="flex flex-col gap-2">
            <span className="text-white text-2xl font-bold">РАЗДЕЛЫ</span>

            <ul className="list-none text-white text-lg">
              <li onClick={() => setMenu(false)}>
                <Link href="/news">Новости</Link>
              </li>

              <li onClick={() => setMenu(false)}>
                <Link href="/opinions">Мнения</Link>
              </li>

              <li onClick={() => setMenu(false)}>
                <Link href="/society">Общество</Link>
              </li>

              <li onClick={() => setMenu(false)}>
                <Link href="/economics">Экономика</Link>
              </li>

              <li onClick={() => setMenu(false)}>
                <Link href="/ecology">Экология</Link>
              </li>

              <li onClick={() => setMenu(false)}>
                <Link href="/archive">Архив</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}