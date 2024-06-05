import data from "@/lib/data.json";

export default function Page({ params }) {
  const blog = data.find((blog) => blog.id == String(params.slug));

  console.log(blog);

  if (!blog) {
    return <p>Blog post not found</p>;
  }

  return <>{params.slug}</>;
}
