
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <Link to={`/blog/${post.id}`}>
      <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
    </Link>
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-sm text-gray-500 mb-2">{post.date} &bull; by {post.author}</p>
      <h3 className="text-2xl font-bold text-brand-dark mb-3">
        <Link to={`/blog/${post.id}`} className="hover:text-brand-blue transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
      <div className="mt-auto">
        <Link to={`/blog/${post.id}`} className="font-semibold text-brand-blue hover:text-brand-dark transition-colors">
          Read More &rarr;
        </Link>
      </div>
    </div>
  </div>
);

const BlogPage = () => {
  return (
    <div className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">From the Aquamartin Blog</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Stay updated with the latest news, health tips, and stories from the world of hydration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
