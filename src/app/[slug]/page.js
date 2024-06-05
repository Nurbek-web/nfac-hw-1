import BlogDetail from "@/components/blog-detail";
import data from "@/lib/data.json";

export default function Page({ params }) {
  const blog = data.find((blog) => blog.id == String(params.slug));

  console.log(blog);

  if (!blog) {
    return <p>Blog post not found</p>;
  }

  return (
    <>
      <BlogDetail blog={blog} />
    </>
  );
}
