import Link from "next/link"

export default function BlogCard({blog}) {
    return (
        <>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <div className="p-4">
          <Link href={`/${blog.id}`} className="block" prefetch={false}>
            <h3 className="text-lg font-semibold mb-2 hover:text-primary dark:hover:text-primary-400">
              {blog.title}
            </h3>
          </Link>
          <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="mr-2">
              <UserIcon className="w-4 h-4 inline-block" />
            </div>
            <span>{blog.author}</span>
            <div className="mx-2">·</div>
            <div>
              <CalendarIcon className="w-4 h-4 inline-block" />
            </div>
            <span>{blog.date}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {blog.description}
          </p>
        </div>
      </div>
</>
    )
}


function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }

