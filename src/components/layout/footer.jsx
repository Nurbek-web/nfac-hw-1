
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 dark:bg-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <div className="text-sm text-gray-500 dark:text-gray-400">&copy; 2024 My Blog. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}