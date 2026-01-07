import { StaticImageData } from "next/image"

type TypeArticle = {
  id: number
  title: string
  image?: StaticImageData
  imageDescription: string
  category: "Мнения" | "Общество" | "Экономика" | "Экология" | "Архив"
  date: string
  author: string
  content: {
    type: "paragraph" | "media" | "heading"
    content: string | StaticImageData
    mediaDescription?: string
  }[]
}

type Pages = "Мнения" | "Общество" | "Экономика" | "Экология" | "Архив"

export type { TypeArticle, Pages }
