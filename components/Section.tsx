import type { TypeArticle, Pages } from "@/types"
import Link from "next/link"
import Article from "./Article"
import MainArticle from "./MainArticle"
import { enCategory } from "@/tools"

type Props = {
  category: Pages
  firstArticleData: TypeArticle
  secondArticleData: TypeArticle
  thirdArticleData: TypeArticle
  fourthArticleData: TypeArticle
  fifthArticleData: TypeArticle
}

export default function Section({
  category,
  firstArticleData,
  secondArticleData,
  thirdArticleData,
  fourthArticleData,
  fifthArticleData,
}: Props) {
  return (
    <div>
      <h2 className="px-5 md:px-0 font-bold text-lg py-5">{category.toUpperCase()}</h2>

      <div className="hidden md:grid md:grid-cols-[2fr_1fr] md:gap-5">
        <Article
          id={firstArticleData.id}
          image={firstArticleData.image}
          title={firstArticleData.title}
          category={firstArticleData.category}
          author={firstArticleData.author}
          big={true}
          otherColor={false}
          withoutBottomBorder={false}
        />

        <Article
          id={secondArticleData.id}
          image={secondArticleData.image}
          title={secondArticleData.title}
          category={secondArticleData.category}
          author={secondArticleData.author}
          big={false}
          otherColor={false}
          withoutBottomBorder={false}
        />
      </div>

      <div className="md:hidden">
        <div className="mb-20">
          <MainArticle
            id={firstArticleData.id}
            image={firstArticleData.image}
            title={firstArticleData.title}
            category={firstArticleData.category}
            author={firstArticleData.author}
          />
        </div>

        <Article
          id={secondArticleData.id}
          image={secondArticleData.image}
          title={secondArticleData.title}
          category={secondArticleData.category}
          author={secondArticleData.author}
          big={false}
          otherColor={false}
          withoutBottomBorder={false}
        />
      </div>

      <div className="pt-5 lg:grid lg:grid-cols-3 lg:gap-2">
        <Article
          id={thirdArticleData.id}
          image={thirdArticleData.image}
          title={thirdArticleData.title}
          category={thirdArticleData.category}
          author={thirdArticleData.author}
          big={false}
          otherColor={false}
          withoutBottomBorder={false}
        />

        <Article
          id={fourthArticleData.id}
          image={fourthArticleData.image}
          title={fourthArticleData.title}
          category={fourthArticleData.category}
          author={fourthArticleData.author}
          big={false}
          otherColor={false}
          withoutBottomBorder={false}
        />

        <Article
          id={fifthArticleData.id}
          image={fifthArticleData.image}
          title={fifthArticleData.title}
          category={fifthArticleData.category}
          author={fifthArticleData.author}
          big={false}
          otherColor={false}
          withoutBottomBorder={false}
        />
      </div>

      <Link
        href={`/${enCategory(category)}`}
        className="block mt-5 px-5 md:px-0 py-2 text-sm font-bold border-t border-t-black border-b-3 border-b-black"
      >
        ЧИТАТЬ ЕЩЕ
      </Link>
    </div>
  )
}