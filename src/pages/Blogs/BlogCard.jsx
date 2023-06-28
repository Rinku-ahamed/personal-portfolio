import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const { id, name, description, image } = blog;
  return (
    <div className="border border-gray-200 rounded-lg p-3 text-center">
      <img src={image} alt="" />
      <div className=" px-3">
        <h3 className="mt-2 text-xl text-sky-600 font-Karla font-semibold">
          {name}
        </h3>
        <p className="text-sm mt-2 mb-3 text-gray-500">
          {description.slice(0, 65)}...
        </p>
        <Link
          className="bg-sky-700 text-white px-3 py-1 rounded"
          to={`/blogs/${id}`}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
