import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      Hello World
    </main>
  );
}

function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <FeatherIcon className="h-6 w-6" />
          <span className="sr-only">Blog App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Latest Insights
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore our blog for the latest news, trends, and expert
                    insights in the world of technology and beyond.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Explore Blog
                </Link>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest from the Blog
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our latest blog posts and stay up-to-date with the
                  latest trends and insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl lg:grid-cols-3">
              <div className="group flex flex-col rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:hover:shadow-md">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Blog Post"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-bold">
                      Unlocking the Power of React Hooks
                    </h3>
                    <p className="mt-2 text-gray-500 line-clamp-3 dark:text-gray-400">
                      Discover how React Hooks can revolutionize your
                      development workflow and unlock new levels of flexibility
                      and efficiency.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    prefetch={false}
                  >
                    Read More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:hover:shadow-md">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Blog Post"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-bold">
                      Mastering Responsive Design with CSS
                    </h3>
                    <p className="mt-2 text-gray-500 line-clamp-3 dark:text-gray-400">
                      Learn how to create stunning, responsive websites that
                      adapt seamlessly to any device with the power of CSS.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    prefetch={false}
                  >
                    Read More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:hover:shadow-md">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Blog Post"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-bold">
                      Optimizing Website Performance
                    </h3>
                    <p className="mt-2 text-gray-500 line-clamp-3 dark:text-gray-400">
                      Discover the best practices and techniques to optimize
                      your website's performance and deliver lightning-fast
                      experiences to your users.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    prefetch={false}
                  >
                    Read More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Podcast
            </Link>
            <Link href="#" prefetch={false}>
              Videos
            </Link>
            <Link href="#" prefetch={false}>
              Webinars
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Subscribe</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get the latest updates and news from our blog.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FeatherIcon(props) {
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
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  );
}
