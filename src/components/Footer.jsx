export default function Footer(){
  return (
    <footer className="bg-black text-white/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold">© {new Date().getFullYear()} MAS Mail & Print Center</div>
        <div className="text-sm">5970 E State St, Rockford, IL 61108 · (815) 505-2509</div>
      </div>
    </footer>
  )
}
