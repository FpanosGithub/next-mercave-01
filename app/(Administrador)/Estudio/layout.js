import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head/>
      <body className={`overflow-y-scroll bg-gray-800 bg-[url('/grid.svg')]`}>
          <div className="mx-auto max-w-8xl px-2 pt-4">
            {/* Página / páginas de la aplicación */}
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-4">
                {children}
              </div>
            </div>
          </div>
      </body>
    </html>
  )
}