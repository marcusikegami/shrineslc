
export default function Header() {
  return (
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 sticky top-0 bg-white">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="text-3xl font-bold text-darkpurple border-b-4 border-darkpurple">SHRINE SLC</span>
            </a>
          </div>
          <div id="nav" className="-mr-2 -my-2 md:hidden">
            <a href="#contact" className="text-xl drop-shadow-lg font-bold text-softblack hover:drop-shadow-xl hover:text-darkpurple hover:underline underline-offset-4 px-2">Contact</a>
            <a href="#video" className="text-xl drop-shadow-lg font-bold text-softblack hover:drop-shadow-lg hover:text-darkpurple hover:underline underline-offset-4 px-2">Video</a>
            <a href="#contact" className="text-xl drop-shadow-lg font-bold text-softblack hover:drop-shadow-lg hover:text-darkpurple hover:underline underline-offset-4 px-2">Contact</a>
          </div>
          
        </div>
      </div>
  )
}