import type { Pages } from "@/types"
import { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import { enCategory } from "@/tools"

type Props = {
  id: number
  image?: StaticImageData
  title: string
  category: Pages
  author?: string
}

export default function MainArticle({
  id,
  image,
  title,
  category,
  author,
}: Props) {
  return (
    <Link href={`/${enCategory(category)}/${id}`} className="max-h-137.5 w-full block relative">
      {image ? (
        <div className="relative max-h-137.5 w-full">
          <Image src={image} alt="Image" className="max-h-137.5 w-full object-cover" />

          <div className="absolute bottom-0 left-0 max-h-137.5 w-full pb-10">
            {category === "Мнения" ? (
              <div className="hidden md:block">
                <span className="inline px-2 py-1 text-blue-500 text-sm bg-white">{author?.toUpperCase()}</span>
                <div className="w-full h-2" />
                <h2 className="inline pb-2 pr-2 text-3xl font-bold bg-white">{title}</h2>
              </div>
            ) : (
              <h2 className="hidden md:inline pb-2 pr-2 text-3xl font-bold bg-white">{title}</h2>
            )}
          </div>

          {category === "Мнения" ? (
            <div className="block md:hidden p-3">
              <span className="p-1 text-blue-500 text-sm bg-white">{author?.toUpperCase()}</span>
              <div className="w-full h-2" />
              <h2 className="text-3xl font-bold bg-white">{title}</h2>
            </div>
          ) : (
            <h2 className="block md:hidden p-3 text-3xl leading-7 font-bold bg-white">{title}</h2>
          )}
        </div>
      ) : (
        <div className="max-h-137.5 w-full bg-gray-400" />
      )}
    </Link>
  )
}