import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PostItemProps {
  post: {
    slug: string;
    title: string;
    date: string;
    author: string;
    image?: string;
    excerpt?: string;
  };
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`} legacyBehavior>
      <a className='group card overflow-hidden relative'>
        <div className='relative h-96'>
          <Image
            src={post.image || '/images/placeholder.jpg'}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            className='group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300'
          />
          <div className='absolute inset-0  bg-gradient-to-t from-black to-transparent opacity-25'></div>
          <div className='absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-60'>
            <h3 className='text-lg font-bold text-white truncate'>
              {post.title}
            </h3>
            <p className='text-sm text-gray-300 mb-2'>
              <span className='font-bold mr-2 text-xs'>By {post.author}</span>
              <span className='text-xs'>{post.date}</span>
            </p>
            {post.excerpt && <p className='text-gray-300'>{post.excerpt}</p>}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostItem;
