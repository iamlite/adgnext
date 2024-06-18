import React, { useState } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

interface SocialShareProps {
  shareUrl: string;
  title: string;
  image: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  shareUrl,
  title,
  image,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`fixed top-1/4 right-2 flex flex-col gap-4 p-2 bg-base-100 rounded-lg shadow-lg border border-gray-200 ${isSidebarOpen ? 'w-48 animate-slide-in-right' : 'w-12'} transition-all duration-300`}
    >
      <button
        className='flex items-center justify-center h-12 w-12 bg-primary text-white rounded-lg hover:bg-primary-focus'
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close' : 'Share'}
      </button>
      {isSidebarOpen && (
        <div className='flex flex-col gap-2 mt-4'>
          <FacebookShareButton
            url={shareUrl}
            className='transition-transform transform hover:scale-110'
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className='transition-transform transform hover:scale-110'
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className='transition-transform transform hover:scale-110'
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <RedditShareButton
            url={shareUrl}
            title={title}
            className='transition-transform transform hover:scale-110'
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
          <PinterestShareButton
            url={shareUrl}
            media={image}
            className='transition-transform transform hover:scale-110'
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body='Check out this post!'
            className='transition-transform transform hover:scale-110'
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
