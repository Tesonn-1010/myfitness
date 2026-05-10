import "./globals.css";

export const metadata = {
  title: "筋トレ＆食事管理",
  description: "理想の体を作るためのシンプルログ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white flex flex-col">
        <header className="p-4 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-xl font-bold tracking-tighter">FIT LOG</h1>
            <ul className="flex flex-wrap items-center gap-6 text-sm opacity-80">
              <li>
                <a href="#plan" className="hover:opacity-100">
                  プラン
                </a>
              </li>
              <li>
                <a href="#meals" className="hover:opacity-100">
                  食事記録
                </a>
              </li>
              <li>
                <a href="#log" className="hover:opacity-100">
                  筋トレ記録
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow max-w-5xl w-full mx-auto p-6">
          {children}
        </main>

        <footer className="p-8 border-t border-white/10 text-center text-xs opacity-50">
          <p>&copy; 2026 FIT LOG. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
