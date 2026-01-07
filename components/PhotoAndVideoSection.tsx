import { TypeArticle } from "@/types"
import Article from "./Article"

type Props = {
  firstArticleData: TypeArticle
  secondArticleData: TypeArticle
  thirdArticleData: TypeArticle
  fourthArticleData: TypeArticle
}

export default function PhotoAndVideoSection({
  firstArticleData,
  secondArticleData,
  thirdArticleData,
  fourthArticleData,
}: Props) {
  return (
    <div className="my-10 py-5 md:px-25 w-screen flex flex-col gap-5 bg-blue-900 [@media(min-width:1700px)]:px-70">
      <h2 className="px-5 md:px-0 text-white text-lg font-bold">ФОТО И ВИДЕО</h2>

      <div className="lg:flex lg:justify-between lg:items-center lg:gap-5">
        <Article
          id={firstArticleData.id}
          image={firstArticleData.image}
          title={firstArticleData.title}
          category={firstArticleData.category}
          author={firstArticleData.author}
          big={false}
          otherColor={true}
          withoutBottomBorder={false}
        />

        <Article
          id={secondArticleData.id}
          image={secondArticleData.image}
          title={secondArticleData.title}
          category={secondArticleData.category}
          author={secondArticleData.author}
          big={false}
          otherColor={true}
          withoutBottomBorder={false}
        />

        <Article
          id={thirdArticleData.id}
          image={thirdArticleData.image}
          title={thirdArticleData.title}
          category={thirdArticleData.category}
          author={thirdArticleData.author}
          big={false}
          otherColor={true}
          withoutBottomBorder={false}
        />

        <Article
          id={fourthArticleData.id}
          image={fourthArticleData.image}
          title={fourthArticleData.title}
          category={fourthArticleData.category}
          author={fourthArticleData.author}
          big={false}
          otherColor={true}
          withoutBottomBorder={false}
        />
      </div>
    </div>
  )
}