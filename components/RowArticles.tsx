import type { Pages } from "@/types"
import { TypeArticle } from "@/types"
import Article from "./Article"
import Link from "next/link"
import { enCategory } from "@/tools"

type Props = {
  category: string | Pages
  firstArticleData: TypeArticle
  secondArticleData: TypeArticle
  thirdArticleData: TypeArticle
  fourthArticleData: TypeArticle
}

export default function RowArticles({
  category,
  firstArticleData,
  secondArticleData,
  thirdArticleData,
  fourthArticleData,
}: Props) {
  return (
    <div className="w-screen md:px-25 flex flex-col gap-5 [@media(min-width:1700px)]:px-70">
      <h2 className="px-5 md:px-0 text-lg font-bold">{category.toUpperCase()}</h2>

      <div className="lg:flex lg:justify-between lg:items-center lg:gap-5">
        <Article
          id={firstArticleData.id}
          image={firstArticleData.image}
          title={firstArticleData.title}
          category={firstArticleData.category}
          author={firstArticleData.author}
          big={false}
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
      </div>

      <Link
        href={`/${enCategory(firstArticleData.category)}`}
        className="block px-5 md:px-0 py-2 text-sm font-bold border-t border-t-black border-b-3 border-b-black"
      >
        ЧИТАТЬ ЕЩЕ
      </Link>
    </div>
  )
}