import { Devisio } from '../components/Devisio';

export function Home() {
  return (
    <header>
      <nav className="bg-white/90 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100">
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <a className="flex gap-5 items-center" href="#" aria-label="logo">
                <Devisio />
                <span className="text-3xl font-black">Devisio</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
