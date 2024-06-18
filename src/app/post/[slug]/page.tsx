// src/app/post/[slug]/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { getPosts, Post } from '@/lib/posts';

import SocialShare from '@/components/SocialShare';

const PostItem: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await getPosts();
      const post = posts.find((p) => p.slug === slug);
      if (post) {
        setPost(post);
        const related = posts.filter(
          (p) =>
            p.slug !== post.slug &&
            (p.categories.some((category) =>
              post.categories.includes(category),
            ) ||
              p.tags.some((tag) => post.tags.includes(tag))),
        );
        setRelatedPosts(related);
      }
    }
    fetchData();
  }, [slug]);

  if (!post) return <div>Post not found</div>;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className='relative bg-base-100'>
      <SocialShare shareUrl={shareUrl} title={post.title} image={post.image} />
      <div className='container mx-auto px-4 py-8'>
        {post.image && (
          <div className='mb-6'>
            <Image
              src={post.image}
              alt={post.title}
              width={9999}
              height={800}
              className='w-full h-96 object-cover rounded-lg shadow-lg'
            />
          </div>
        )}
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
          <p className='text-sm text-gray-500 mb-4'>
            {new Date(post.date).toLocaleDateString()} by {post.author}
          </p>
          <div className='mb-4'>
            <p>
              <strong>Categories:</strong> {post.categories.join(', ')}
            </p>
            <p>
              <strong>Tags:</strong> {post.tags.join(', ')}
            </p>
          </div>
          <div className='prose lg:prose-xl'>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          {relatedPosts.length > 0 && (
            <div className='mt-12'>
              <h2 className='text-2xl font-bold mb-4'>Related Posts</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {relatedPosts.map((relatedPost) => (
                  <Link
                    href={`/post/${relatedPost.slug}`}
                    key={relatedPost.slug}
                    className='block'
                  >
                    <div className='card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                      {relatedPost.image && (
                        <figure>
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            width={9999}
                            height={800}
                            className='w-full h-48 object-cover'
                          />
                        </figure>
                      )}
                      <div className='card-body'>
                        <h2 className='card-title'>{relatedPost.title}</h2>
                        <p className='text-sm text-gray-500 mb-4'>
                          {new Date(relatedPost.date).toLocaleDateString()} by{' '}
                          {relatedPost.author}
                        </p>
                        <p>{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
