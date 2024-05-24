import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'blog 1',
      description: " this is blog 1"
    },
    {
      id: 2,
      title: 'blog 2',
      description: " this is blog 2"
    },
    {
      id: 3,
      title: 'blog 3',
      description: " this is blog 3"
    },
  ]

  return (
    <main className="">
      <ul>
        {
          blogs.map(blog => <li className="mt-5" key={blog.id}>
            <Link href = {`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>)
        }
      </ul>
    </main>
  );
}