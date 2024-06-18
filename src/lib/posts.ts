// src/lib/posts.ts
export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  content: string;
  excerpt: string;
  categories: string[];
  tags: string[];
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost:3000/api/posts'); // Adjust the URL if needed
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts: Post[] = await res.json();
  return posts;
}
