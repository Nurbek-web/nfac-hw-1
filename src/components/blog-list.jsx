
import Link from "next/link"
import BlogCard from "./blog-card"

import data from '../lib/data.json'

export default function BlogList() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
        
        {data.map((blog) => (
            <BlogCard blog={blog} key={blog.id}/>
        ))}
    </section>
  )
}
