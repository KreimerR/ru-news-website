import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className="pt-5 px-3 md:px-0">
      <Link href="/">
        <h1 className="text-3xl w-full text-center lg:text-left font-bold">The Saint-Petersburg Times</h1>
      </Link>

      <div className="mt-5 mb-20 flex flex-col gap-5 lg:flex-row lg:gap-0 lg:justify-between lg:items-top">
        <div>
          <span className="font-bold block mb-3">ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ</span>

          <form className="flex flex-col items-start gap-2">
            <input type="email" placeholder="Адрес электронной почты" className="border-gray-300 border py-3 px-2 w-full" required />
            <input type="submit" value="ПОДПИСАТЬСЯ" className="py-2 px-4 bg-blue-900 text-white font-bold hover:cursor-pointer" />

            <div className="flex flex-col gap-4 mt-2">
              <label className="flex items-center gap-2 text-lg">
                <input type="checkbox" name="emailFrequency" value="Ежедневная" className="w-6 h-6" defaultChecked />
                Ежедневная
              </label>

              <label className="flex items-center gap-2 text-lg">
                <input type="checkbox" name="emailFrequency" value="Еженедельная" className="w-6 h-6" defaultChecked />
                Еженедельная
              </label>
            </div>
          </form>
        </div>

        <div>
          <span className="font-bold block md-3">The Saint-Petersburg Times</span>

          <ul className="list-none">
            <li>
              <Link href="/about">О нас</Link>
            </li>

            <li>
              <Link href="/policy">Политика конфиденциальности</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="font-bold block md-3">Подписывайтесь на нас</span>

          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faTelegram} className="text-2xl hover:cursor-pointer" />
            <FontAwesomeIcon icon={faYoutube} className="text-2xl hover:cursor-pointer" />
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl hover:cursor-pointer" />
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl hover:cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:cursor-pointer" />
          </div>
        </div>

        <div>
          <span className="font-bold block md-3">Приложения</span>

          <ul className="list-none">
            <li className="hover:cursor-pointer">iOS</li>
            <li className="hover:cursor-pointer">Android</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 py-4 border-t-black border-t">
        <span>The Saint-Petersburg Times, 2026 — {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}