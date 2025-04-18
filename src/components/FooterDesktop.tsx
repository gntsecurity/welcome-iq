export default function FooterDesktop() {
  return (
    <footer className="hidden md:flex justify-between items-center px-10 py-6 text-sm text-gray-400 bg-white/70 backdrop-blur-xl border-t border-gray-200">
      <div>&copy; {new Date().getFullYear()} GNT Security. All rights reserved.</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-600 transition">Privacy</a>
        <a href="#" className="hover:text-gray-600 transition">Terms</a>
        <a href="#" className="hover:text-gray-600 transition">Cookies</a>
      </div>
    </footer>
  )
}
