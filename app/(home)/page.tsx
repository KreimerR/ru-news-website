import type { TypeArticle } from "@/types"

import {
  articlesData,
  opinionArticlesData,
  societyArticlesData,
  economicsArticlesData,
  ecologyArticlesData,
  archiveArticlesData,
} from "@/data/articles"

import MainArticle from "@/components/MainArticle"
import Article from "@/components/Article"
import Section from "@/components/Section"
import PhotoAndVideoSection from "@/components/PhotoAndVideoSection"
import RowArticles from "@/components/RowArticles"
import AccentTopic from "@/components/AccentTopic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

import { feedArticlesParameters, popularArticlesParameters, topArticlesParameters, mArticle, editorsArticle } from "@/tools"

export default function Home() {
  const articles = articlesData.map((article: TypeArticle) =>
    <Article
      key={article.id}
      id={article.id}
      title={article.title}
      category={article.category}
      author={article.author}
      big={false}
      otherColor={false}
      withoutBottomBorder={false}
    />
  )

  const fullArticles = articlesData.map((article: TypeArticle) =>
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

  const feedArticles = []
  const popularArticles = []
  const topArticles = []

  for (let i = feedArticlesParameters.from; i <= feedArticlesParameters.to; i++) {
    feedArticles.push(articles[i])
  }

  for (let i = popularArticlesParameters.from; i <= popularArticlesParameters.to; i++) {
    popularArticles.push(articles[i])
  }

  for (let i = topArticlesParameters.from; i <= topArticlesParameters.to; i++) {
    topArticles.push(fullArticles[i])
  }

  const listOfPopularArticles = popularArticles.map((popularArticle: any, index: number) =>
    <div className="flex gap-2 border-b border-b-gray-200 last:border-none" key={index}>
      <span className="font-bold">{index + 1}</span>
      {popularArticle}
    </div>
  )

  return (
    <div className="md:my-10">
      <section className="md:px-25 [@media(min-width:1700px)]:px-70 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-5">
        <div>
          <MainArticle
            id={articlesData[mArticle].id}
            image={articlesData[mArticle].image}
            title={articlesData[mArticle].title}
            category={articlesData[mArticle].category}
            author={articlesData[mArticle].author}
          />

          <div className="lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr_1fr] lg:gap-5 pt-15 md:pt-5">
            {topArticles}
          </div>

          <Section
            category="Мнения"
            firstArticleData={opinionArticlesData[0]}
            secondArticleData={opinionArticlesData[1]}
            thirdArticleData={opinionArticlesData[2]}
            fourthArticleData={opinionArticlesData[3]}
            fifthArticleData={opinionArticlesData[4]}
          />

          <AccentTopic
            firstArticleData={societyArticlesData[0]}
            secondArticleData={societyArticlesData[1]}
            thirdArticleData={societyArticlesData[2]}
            fourthArticleData={societyArticlesData[3]}
          />
        </div>

        <div className="pt-10 lg:pt-0 flex flex-col gap-10">
          <div>
            <h2 className="px-5 md:px-0 font-bold text-[1.2rem] pb-2">ЛЕНТА НОВОСТЕЙ</h2>

            <div className="px-5 md:px-0 flex flex-col gap-3">
              {feedArticles}
            </div>
          </div>

          <div>
            <h2 className="px-5 md:px-0 font-bold text-[1.2rem] py-2">ОТ РЕДАКЦИИ</h2>

            <Article
              id={articlesData[editorsArticle].id}
              image={articlesData[editorsArticle].image}
              title={articlesData[editorsArticle].title}
              category={articlesData[editorsArticle].category}
              author={articlesData[editorsArticle].author}
              big={false}
              otherColor={false}
              withoutBottomBorder={false}
            />
          </div>

          <div>
            <h2 className="px-5 md:px-0 font-bold text-[1.2rem] py-2">САМОЕ ПОПУЛЯРНОЕ</h2>

            <div className="px-5 md:px-0 flex flex-col gap-3">
              {listOfPopularArticles}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full h-0 border-b-3 border-black" />

            <div className="flex justify-between items-center">
              <span className="px-5 md:px-0 font-bold">ПОДПИШИТЕСЬ:</span>

              <div className="px-5 md:px-0 flex items-center gap-1">
                <FontAwesomeIcon icon={faTelegram} className="text-3xl hover:cursor-pointer" />
                <FontAwesomeIcon icon={faYoutube} className="text-3xl hover:cursor-pointer" />
                <FontAwesomeIcon icon={faXTwitter} className="text-3xl hover:cursor-pointer" />
                <FontAwesomeIcon icon={faFacebookF} className="text-3xl hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <PhotoAndVideoSection
          firstArticleData={opinionArticlesData[0]}
          secondArticleData={opinionArticlesData[1]}
          thirdArticleData={opinionArticlesData[2]}
          fourthArticleData={opinionArticlesData[3]}
        />

        <RowArticles
          category="Экономика"
          firstArticleData={economicsArticlesData[0]}
          secondArticleData={economicsArticlesData[1]}
          thirdArticleData={economicsArticlesData[2]}
          fourthArticleData={economicsArticlesData[3]}
        />

        <div className="mb-10 md:px-25 [@media(min-width:1700px)]:px-70">
          <Section
            category="Общество"
            firstArticleData={societyArticlesData[0]}
            secondArticleData={societyArticlesData[1]}
            thirdArticleData={societyArticlesData[2]}
            fourthArticleData={societyArticlesData[3]}
            fifthArticleData={societyArticlesData[4]}
          />
        </div>

        <div className="flex flex-col gap-5">
          <RowArticles
            category="Экология"
            firstArticleData={ecologyArticlesData[0]}
            secondArticleData={ecologyArticlesData[1]}
            thirdArticleData={ecologyArticlesData[2]}
            fourthArticleData={ecologyArticlesData[3]}
          />

          <RowArticles
            category="Архив"
            firstArticleData={archiveArticlesData[0]}
            secondArticleData={archiveArticlesData[1]}
            thirdArticleData={archiveArticlesData[2]}
            fourthArticleData={archiveArticlesData[3]}
          />
        </div>

      </section>
    </div>
  )
}