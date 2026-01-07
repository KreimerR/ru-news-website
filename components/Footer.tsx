import Link from "next/link"

export default function Footer() {
  return (
    <div className="px-3 md:px-0">
      <Link href="/">
        <h1 className="text-4xl lg:text-3xl w-full text-center lg:text-left font-bold">The Saint-Petersburg Times</h1>
      </Link>

      <div className="mt-5 mb-20 flex flex-col gap-5 lg:flex-row lg:gap-0 lg:justify-between lg:items-top">
        <div>
          <span className="font-bold block mb-3">ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ</span>

          <form className="flex flex-col items-start gap-2">
            <input type="email" placeholder="Адрес электронной почты" className="border-gray-300 border py-3 px-2 w-100" required />
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
            <i className="fa-brands fa-telegram text-2xl hover:cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-2xl hover:cursor-pointer"></i>
            <i className="fa-brands fa-x-twitter text-2xl hover:cursor-pointer"></i>
            <i className="fa-brands fa-facebook-f text-2xl hover:cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-2xl hover:cursor-pointer"></i>
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