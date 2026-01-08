"use client"

import type { TypeArticle } from "@/types"
import { articlesData } from "@/data/articles"
import { useState } from "react"
import Article from "@/components/Article"

export default function Search() {
  const [currentInputText, setCurrentInputText] = useState<string>("")
  const [found, setFound] = useState<undefined | boolean>(undefined)
  const [foundArticles, setFoundArticles] = useState<TypeArticle[]>([])

  const articles = foundArticles.map((article: TypeArticle) =>
    <Article
      key={article.id}
      id={article.id}
      title={article.title}
      image={article.image}
      category={article.category}
      author={article.author}
      big={false}
      otherColor={false}
      withoutBottomBorder={true}
    />
  )

  function searchArticles() {
    const query = currentInputText.toLowerCase()

    if (query.trim() === "") {
      setFound(undefined)
      return
    }

    const results = articlesData.filter((article: TypeArticle) => {
      const titleMatch = article.title.toLowerCase().includes(query)

      const contentMatch = article.content.some(
        (element: any) =>
          element.type === "paragraph" &&
          element.content.toLowerCase().includes(query)
      )

      return titleMatch || contentMatch
    })

    if (results.length !== 0) {
      setFound(true)
    } else {
      setFound(false)
    }

    setFoundArticles(results)
  }

  return (
    <div>
      <div className="relative md:my-5">
        <div className="w-full h-75 bg-blue-950" />

        <div className="absolute left-0 bottom-[-10] md:px-25 [@media(min-width:1700px)]:px-70 w-full">
          <h1 className="inline-block bg-white text-3xl md:text-5xl font-bold py-2 px-5 mx-5 md:mx-0">Поиск</h1>

          <div className="md:mt-5 py-10 px-5 md:bg-blue-900 w-full">
            <div className="bg-white w-full flex items-center">
              <input type="text" className="w-full p-2 outline-0" onChange={(e) => setCurrentInputText(e.currentTarget.value)} />
              <i className="fa-solid fa-magnifying-glass pr-7 hover:cursor-pointer" onClick={searchArticles} />
            </div>
          </div>
        </div>
      </div>

      {found !== undefined ? found ? (
        <div className="pb-5 md:px-25 [@media(min-width:1700px)]:px-70">
          <h2 className="px-5 md:px-0 font-bold py-10">НАЙДЕНЫ СТАТЬИ</h2>

          <div className="lg:grid lg:grid-cols-3 lg:gap-5">
            {articles}
          </div>
        </div>
      ) : (
        <h2 className="px-5 font-bold py-10 md:px-25 [@media(min-width:1700px)]:px-70">СТАТЬИ НЕ БЫЛИ НАЙДЕНЫ</h2>
      ) : null}
    </div>
  )
}