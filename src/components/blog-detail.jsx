
export default function BlogDetail({blog}) {
    return (
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <p className="text-gray-500 dark:text-gray-400">
              Posted on <time dateTime="2023-08-24">{blog.date}</time> by{" "}
              <a href="#" className="font-medium hover:underline">
                {blog.author}
              </a>
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              {blog.title}
            </h1>
          </div><br />
          <p>
            {blog.description}
          </p>
        </article>
      </div>
    )
  }