export default function HeaderDesktop() {
  return (
    <header className="hidden md:flex items-center justify-between px-10 py-3 border-b bg-white/90 backdrop-blur-xl shadow-sm">
      <a href="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Welcome-IQ Logo" className="h-7 w-auto" />
        <span className="text-base font-semibold text-gray-900 tracking-tight">Welcome-IQ</span>
      </a>

      <div className="flex items-center gap-4">
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          {['/admin', '/org', '/logs'].map((href, i) => (
            <a
              key={i}
              href={href}
              className="hover:text-gray-900 hover:underline underline-offset-4 transition"
            >
              {href === '/admin' ? 'Dashboard' : href === '/org' ? 'Org Settings' : 'Logs'}
            </a>
          ))}
        </nav>

        <a
          href="/onboard"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-xl transition"
        >
          Contractor Sign-In
        </a>
      </div>
    </header>
  )
}