import { TypeArticle } from "@/types"
import Article from "./Article"
import Image from "next/image"
import image2 from "../public/images/image2.jpg"

type Props = {
  firstArticleData: TypeArticle
  secondArticleData: TypeArticle
  thirdArticleData: TypeArticle
  fourthArticleData: TypeArticle
}

export default function AccentTopic({
  firstArticleData,
  secondArticleData,
  thirdArticleData,
  fourthArticleData,
}: Props) {
  return (
    <div>
      <div className="relative">
        <Image src={image2} alt="Image" className="w-full h-100 object-cover" />
        <h1 className="absolute bottom-5 left-0 text-white text-5xl font-bold bg-[rgba(0,0,2,0.3)] p-3">Выделенная тема</h1>
      </div>

      <div className="bg-black lg:flex lg:justify-between lg:items-center lg:gap-5">
        <div className="p-3 lg:my-3 lg:h-50 lg:flex lg:justify-center lg:items-center lg:border-r-blue-900 border-r">
          <Article
            id={firstArticleData.id}
            title={firstArticleData.title}
            category={firstArticleData.category}
            author={firstArticleData.author}
            big={false}
            otherColor={true}
            withoutBottomBorder={true}
          />
        </div>

        <div className="p-3 my-3 lg:h-50 lg:flex lg:justify-center lg:items-center lg:border-r-blue-900 border-r">
          <Article
            id={secondArticleData.id}
            title={secondArticleData.title}
            category={secondArticleData.category}
            author={secondArticleData.author}
            big={false}
            otherColor={true}
            withoutBottomBorder={true}
          />
        </div>

        <div className="p-3 my-3 lg:h-50 lg:flex lg:justify-center lg:items-center lg:border-r-blue-900 border-r">
          <Article
            id={thirdArticleData.id}
            title={thirdArticleData.title}
            category={thirdArticleData.category}
            author={thirdArticleData.author}
            big={false}
            otherColor={true}
            withoutBottomBorder={true}
          />
        </div>

        <div className="p-3 my-3 lg:h-50 lg:flex lg:justify-center lg:items-center">
          <Article
            id={fourthArticleData.id}
            title={fourthArticleData.title}
            category={fourthArticleData.category}
            author={fourthArticleData.author}
            big={false}
            otherColor={true}
            withoutBottomBorder={true}
          />
        </div>
      </div>
    </div>
  )
}