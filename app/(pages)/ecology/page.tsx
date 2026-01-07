import type { TypeArticle } from "@/types"
import { articlesData, ecologyArticlesData } from "@/data/articles"
import MainArticle from "@/components/MainArticle"
import Article from "@/components/Article"
import { popularArticlesParameters, mArticle } from "@/tools"

export default function Ecology() {
  const fullArticles = ecologyArticlesData.map((article: TypeArticle) =>
    <Article
      key={article.id}
      id={article.id}
      image={article.image}
      title={article.title}
      category={article.category}
      author={article.author}
      big={false}
      otherColor={false}
      withoutBottomBorder={false}
    />
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

  const topArticles = []
  const popularArticles = []

  for (let i = 1; i <= ecologyArticlesData.length - 1; i++) {
    topArticles.push(fullArticles[i])
  }

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
      <h2 className="font-bold py-10">ЭКОЛОГИЯ</h2>

      <div className="lg:grid lg:grid-cols-[3fr_1fr] lg:gap-5">
        <div>
          <MainArticle
            id={ecologyArticlesData[mArticle].id}
            image={ecologyArticlesData[mArticle].image}
            title={ecologyArticlesData[mArticle].title}
            category={ecologyArticlesData[mArticle].category}
            author={ecologyArticlesData[mArticle].author}
          />

          <div className="lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr_1fr] lg:gap-5 pt-15 md:pt-5">
            {topArticles}
          </div>
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