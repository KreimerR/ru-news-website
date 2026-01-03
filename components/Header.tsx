import Link from "next/link"

export default function Header() {
  return (
    <div className="md:border-t-blue-500 md:border-b-black md:border-t-2 md:border-b-2">
      <div className="flex justify-between items-center py-5 px-3 md:px-0 md:border-b-black md:border-b">
        <div className="md:hidden">
          <i className="fa-solid fa-bars hover:cursor-pointer" />
        </div>

        <Link href="/">
          <h1 className="text-md w-full text-center md:text-2xl font-bold lg:text-3xl">The Saint-Petersburg Times</h1>
        </Link>

        <div className="hidden md:flex md:flex-col md:justify-center md:items-end md:gap-1">
          <span className="font-bold text-[0.8rem] lg:text-lg">Поддержите The Saint-Petersburg Times</span>
          <button className="p-2 bg-yellow-300 font-bold text-sm hover:cursor-pointer">ПОДДЕРЖАТЬ</button>
        </div>

        <Link href="/search" className="md:hidden">
          <i className="fa-solid fa-magnifying-glass hover:cursor-pointer" />
        </Link>
      </div>

      <div className="hidden md:py-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-bars hover:cursor-pointer" />

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
              <Link href="/video">ВИДЕО</Link>
            </li>

            <li>
              <Link href="/photo">ФОТО</Link>
            </li>

            <li>
              <Link href="/podcasts">ПОДКАСТЫ</Link>
            </li>

            <li>
              <Link href="/newsletter">РАССЫЛКА</Link>
            </li>

            <li>
              <Link href="/editorschoice">ВЫБОР РЕДАКЦИИ</Link>
            </li>
          </ul>
        </div>

        <Link href="/search">
          <i className="fa-solid fa-magnifying-glass hover:cursor-pointer" />
        </Link>
      </div>

      <div className="p-3 flex justify-between items-center md:hidden bg-yellow-300">
        <span>Поддержите The Saint-Petersburg Times</span>
        <button className="py-2 px-5 bg-black text-white text-[0.7rem] font-bold hover:cursor-pointer">ПОДДЕРЖАТЬ</button>
      </div>
    </div>
  )
}