import type { TypeArticle, Pages } from "@/types"
import { articlesData, economicsArticlesData } from "@/data/articles"
import Article from "@/components/Article"
import Image from "next/image"
import { popularArticlesParameters } from "@/tools"
import RowArticles from "@/components/RowArticles"

type Props = {
  params: {
    category: Pages
    id: string
  }
}

export default async function FullArticle({ params }: Props) {
  const { id } = await params

  const article = articlesData.find((article: TypeArticle) => article.id.toString() === id)

  if (!article || article.image === undefined) return (
    <h1
      className="flex justify-center items-center font-bold text-5xl text-center w-screen h-[50vh]"
    >
      An error occured while trying to access the article.
    </h1>
  )

  const articles = articlesData.map((article: TypeArticle) =>
    <Article
      key={article.id}
      id={article.id}
      title={article.title}
      category={article.category}
      author={article.author}
      big={false}
      otherColor={false}
      withoutBottomBorder={true}
    />
  )

  const popularArticles = []

  for (let i = popularArticlesParameters.from; i <= popularArticlesParameters.to; i++) {
    popularArticles.push(articles[i])
  }

  const listOfPopularArticles = popularArticles.map((popularArticle: any, index: number) =>
    <div className="flex gap-2 border-b border-b-gray-200 last:border-none" key={index}>
      <span className="font-bold">{index + 1}</span>
      {popularArticle}
    </div>
  )

  const content = article.content.map((element: any, index: number) => {
    if (element.type === "paragraph") {
      return (
        <p key={index} className="text-lg">{element.content}</p>
      )
    } else if (element.type === "heading") {
      return (
        <h2 key={index} className="text-2xl font-bold">{element.content}</h2>
      )
    } else if (element.type === "media") {
      return (
        <Image key={index} src={element.content} alt="Image" className="w-full h-full object-cover" />
      )
    }
  })

  return (
    <div className="py-10">
      <div className="lg:flex lg:justify-between lg:gap-5 md:px-25 [@media(min-width:1700px)]:px-70">
        <div>
          <h1 className="font-bold text-3xl leading-8 lg:leading-10 lg:text-5xl w-full px-3 lg:px-0 pb-10">{article.title}</h1>
          <Image src={article.image} alt="Image" className="w-full object-cover" />

          <div className="lg:w-[80%] ml-auto flex flex-col gap-5 px-3 lg:px-0 pt-10">
            {content}
          </div>
        </div>

        <div className="hidden lg:block">
          <h2 className="font-bold text-[1.2rem] py-2">САМОЕ ПОПУЛЯРНОЕ</h2>

          <div className="flex flex-col gap-3">
            {listOfPopularArticles}
          </div>
        </div>
      </div>

      <div className="pt-10">
        <RowArticles
          category="ЧИТАТЬ ЕЩЕ"
          firstArticleData={economicsArticlesData[0]}
          secondArticleData={economicsArticlesData[1]}
          thirdArticleData={economicsArticlesData[2]}
          fourthArticleData={economicsArticlesData[3]}
        />
      </div>
    </div>
  )
}