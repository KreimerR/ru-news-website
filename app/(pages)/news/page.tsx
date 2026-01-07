import type { TypeArticle } from "@/types"
import Article from "@/components/Article"
import { articlesData } from "@/data/articles"
import { popularArticlesParameters } from "@/tools"

export default function News() {
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

  return (
    <div className="px-3 md:px-25 [@media(min-width:1700px)]:px-70">
      <h2 className="font-bold py-10">НОВОСТИ</h2>

      <div className="lg:grid lg:grid-cols-[3fr_1fr] lg:gap-5">
        <div>
          {articles}
        </div>

        <div>
          <h2 className="font-bold text-[1.2rem] py-2">САМОЕ ПОПУЛЯРНОЕ</h2>

          <div className="flex flex-col gap-3">
            {listOfPopularArticles}
          </div>
        </div>
      </div>
    </div>
  )
}