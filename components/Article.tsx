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
  big: boolean
  otherColor: boolean
  withoutBottomBorder: boolean
}

export default function Article({
  id,
  image,
  title,
  category,
  author,
  big,
  otherColor,
  withoutBottomBorder,
}: Props) {
  return (
    <Link href={`/${enCategory(category)}/${id}`} className={image
      ? "grid grid-cols-[1fr_2fr] items-start px-4 md:px-0 md:flex md:flex-col md:items-center md:items-baseline gap-2 pb-5"
      : `flex md:flex-col items-center md:items-baseline gap-2 pb-5 ${!withoutBottomBorder && "border-gray-200 border-b last:border-none"}`
    }>
      {image && <Image src={image} alt="Image" className={big
        ? "lg:h-120 object-cover"
        : "w-full md:max-h-75 object-cover"
      } />}

      {category === "Мнения" && (
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <div className={`p-0.5 ${otherColor ? "bg-white text-blue-900" : "bg-blue-900 text-white"}`}>МНЕНИЯ</div>
          {!otherColor && (
            <span className={otherColor ? "text-white" : "text-blue-900"}>{author?.toUpperCase()}</span>
          )}
        </div>
      )}

      <h2 className={`md:w-full ${otherColor && "text-white"} ${big ? "text-2xl leading-7" : "text-lg"} font-semibold leading-5`}>{title}</h2>
    </Link>
  )
}