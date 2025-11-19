// app/components/homepage/blog/blog-card.jsx
// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  // Mappage des champs : supporte la forme "blog" (dev.to) et la forme "project" (ton data/projects.js)
  const cover = blog?.cover_image || blog?.image || '/png/placeholder.png';
  const title = blog?.title || blog?.name || 'Untitled';
  const url = blog?.url || blog?.demo || blog?.code || '#';
  const publishedAt = blog?.published_at || blog?.date || new Date().toISOString();
  const reactions = typeof blog?.public_reactions_count === 'number' ? blog.public_reactions_count : 0;
  const comments = typeof blog?.comments_count === 'number' ? blog.comments_count : 0;
  const reading = typeof blog?.reading_time_minutes === 'number' ? blog.reading_time_minutes : 1;
  const description = blog?.description || blog?.desc || '';

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        {/* next/image accepte des strings (chemins publics ou urls) */}
        <Image
          src={cover}
          height={1080}
          width={1920}
          alt={title}
          href={url}
          className='h-full w-full group-hover:scale-110 transition-all duration-300 object-cover'
        />
      </div>

      <div className="p-2 sm:p-3 flex flex-col">
        {/* <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(publishedAt)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{reactions}</span>
            </p>
            {comments > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{comments}</span>
              </p>
            }
          </div>
        </div> */}

        <Link target='_blank' href={url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-[#16f2b3] sm:text-xl font-medium hover:text-violet-500'>
            {title}
          </p>
        </Link>

        {/* <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${reading} Min Read`}
        </p> */}

        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {description}
        </p>

        {/* <div className="">
          <Link target='_blank' href={url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default BlogCard;