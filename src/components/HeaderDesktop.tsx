export default function HeaderDesktop() {
  return (
    <header className="hidden md:flex items-center justify-between px-10 py-4 border-b bg-white/80 backdrop-blur-xl shadow-sm">
      <a href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Welcome-IQ Logo" className="h-7 w-auto" />
        <span className="text-lg font-semibold text-gray-900 tracking-tight">Welcome-IQ</span>
      </a>

      <div className="flex items-center gap-6">
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="/admin" className="hover:text-blue-600 transition">Dashboard</a>
          <a href="/org" className="hover:text-blue-600 transition">Org Settings</a>
          <a href="/logs" className="hover:text-blue-600 transition">Logs</a>
        </nav>

        <a
          href="/onboard"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow transition"
        >
          + Sign In
        </a>
      </div>
    </header>
  )
}
