import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    image_url,
    thumbnail_url,
    details,
    author,
    rating,
    total_view,
    id
    // tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden p-5 ">
      {/* Header with author and actions */}
      <div className="flex justify-between items-center px-4 py-3  bg-base-200">
        <div className="flex  items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 cursor-pointer border-gray">
          <FaBookmark className="hover:text-blue-600" />
          <FaShareAlt className="hover:text-blue-600" />
        </div>
      </div>

      {/* Title & Image */}
      <div className="px-4 pt-4">
        <h2 className="font-bold text-xl leading-snug mb-2">{title}</h2>
        <img
          src={thumbnail_url || image_url}
          alt="news"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className=" text-gray-500 font-normal text-lg  mt-3 line-clamp-4">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <br></br>
              <Link to={`/news-details/${id}`} className="text-orange-500 font-medium text-sm cursor-pointer">
                Read More
              </Link>
            </>
          ):(
            details
          )}
        </div>

      </div>

      {/* Footer with rating & views */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-300">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={index < rating.number ? "text-orange-500" : "text-gray-300"} />
          ))}
          <span className="ml-1 text-gray-600 text-sm">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
