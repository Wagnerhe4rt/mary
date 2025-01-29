import Link from "next/link";

export function Header() {
  return (
    <header className="flex px-4 py-4 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <div id="menu" className="flex flex-wrap justify-center gap-4">
              <li>
                <Link href="/" className="text-lg hover:text-teal-400">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-lg hover:text-teal-400">
                  DASHBOARD
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-lg hover:text-teal-400">
                  SERVIÇOS
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-lg hover:text-teal-400">
                  POSTS
                </Link>
              </li>
              <li>
                <Link href="/contatos" className="text-lg hover:text-teal-400">
                  CONTATOS
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
