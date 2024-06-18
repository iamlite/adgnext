import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

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

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = fileName.replace(/\.md$/, '');

    // Generate an excerpt (first 150 characters or first paragraph)
    const firstNonEmptyLine =
      content.split('\n').find((line) => line.trim() !== '') || '';
    const excerpt =
      firstNonEmptyLine.substring(0, 150) +
      (firstNonEmptyLine.length > 150 ? '...' : '');

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      image: data.image,
      content,
      excerpt,
      categories: data.categories || [],
      tags: data.tags || [],
    };
  });

  return posts.sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
