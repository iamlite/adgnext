'use client';

import React, { useEffect, useState } from 'react';

import PostItem from '../../components/PostItem'; // Make sure the path is correct
import { getPosts } from '../../lib/posts';

interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  image?: string;
  excerpt?: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  return (
    <div className='container mx-auto px-4 py-16'>
      <h2 className='text-3xl font-bold mb-8 custom-underline'>Blog Posts</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
