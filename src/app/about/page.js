import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Welcome to Our Blog
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Discover the latest insights and stories from our passionate
                team of writers.
              </p>
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/about.jpg"
                width="500"
                height="500"
                alt="Blog Hero"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Meet Our Authors
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Get to know the talented individuals behind our blog.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuv4Nr0IFgv36Nu8-ymLwGw22cTzHcnGl8A&s"
                width="400"
                height="400"
                alt="Author 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Alibek Seitov</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ994q1zSd9mL9GiX4dRI1ng0-16hQ_SdHgYA&s"
                width="400"
                height="400"
                alt="Author 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Someone</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://avatars.githubusercontent.com/u/65224356?v=4"
                width="400"
                height="400"
                alt="Author 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Someone 2</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
