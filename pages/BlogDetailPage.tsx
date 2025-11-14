
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold text-brand-dark">Post not found</h1>
        <p className="text-gray-600 mt-4">The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="mt-8 inline-block bg-brand-blue text-white font-bold py-3 px-6 rounded-full hover:bg-brand-dark transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="text-brand-blue hover:text-brand-dark font-semibold mb-8 inline-block">
            &larr; Back to all posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-6">
            By {post.author} on {post.date}
          </p>
          <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg shadow-lg mb-8" />
          <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
             {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
