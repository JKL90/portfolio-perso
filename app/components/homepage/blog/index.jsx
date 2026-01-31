// app/components/homepage/blog/index.jsx
// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs = [] }) {
  const items = Array.isArray(blogs) ? blogs.slice(0, 6) : [];

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          items.map((blog, i) => (
            blog?.cover_image || blog?.image
              ? <BlogCard blog={blog} key={blog?.id ?? i} />
              : null
          ))
        }
      </div>
    </div>
  );
}

export default Blog;