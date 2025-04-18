export default function FooterDesktop() {
  return (
    <footer className="hidden md:flex justify-between items-center px-10 py-6 text-sm text-gray-500 bg-gray-50 border-t border-gray-200">
      <div>&copy; {new Date().getFullYear()} GNT Security. All rights reserved.</div>
      <div className="flex gap-6">
        <a href="/privacy" className="hover:text-gray-700 transition">Privacy</a>
        <a href="/terms" className="hover:text-gray-700 transition">Terms</a>
        <a href="/cookies" className="hover:text-gray-700 transition">Cookies</a>
      </div>
    </footer>
  )
}
