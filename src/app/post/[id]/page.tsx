import { log } from "console";

interface Post {
  id: number;
  title: string;
  body: string;
}

export async function getPostDetail(postId: string): Promise<Post> {
  log(postId);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return await res.json();
}

export default async function PostDetail({
  params,
}: Readonly<{
  params: { id: string };
}>) {

  const { id } = await params;

  const post = await getPostDetail(id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
