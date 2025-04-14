export default function FooterDesktop() {
  return (
    <footer className="hidden md:flex flex-col md:flex-row justify-between items-center px-10 py-6 text-sm text-gray-400 border-t bg-white/90 backdrop-blur-xl">
      <div className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} GNT Security. All rights reserved.
      </div>
      <div className="flex gap-6 text-gray-400">
        <span className="hover:text-gray-600 transition cursor-default">Privacy Policy</span>
        <span className="hover:text-gray-600 transition cursor-default">Terms of Service</span>
        <span className="hover:text-gray-600 transition cursor-default">Cookie Settings</span>
      </div>
    </footer>
  )
}
