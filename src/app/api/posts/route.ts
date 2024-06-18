// src/app/api/posts/route.ts
import fs from 'fs';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';
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

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

export async function GET() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = fileName.replace(/\.md$/, '');

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

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return NextResponse.json(posts);
}
