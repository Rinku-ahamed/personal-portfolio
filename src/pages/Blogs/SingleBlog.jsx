import { useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
const SingleBlog = () => {
  const [blogs] = useBlogs();
  const { id } = useParams();
  const singleBlog = blogs?.find((blog) => blog?.id == id);

  return (
    <div className=" bg-base-100 shadow-xl md:w-3/4 pb-4">
      <figure>
        <img
          src={singleBlog?.image}
          alt="Movie"
          className="h-full object-cover "
        />
      </figure>
      <div className="card-body  py-2  pe-4">
        <h2 className="card-title text-2xl mb-2 text-sky-600">
          {singleBlog?.name}
        </h2>
        <p className="text-gray-500">{singleBlog?.description}</p>
        <ul className="mt-3">
          <h3 className="text-xl">Features:</h3>
          {singleBlog?.features?.map((feature, index) => (
            <p key={index} className="mb-2 text-gray-500">
              {index + 1}. {feature}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleBlog;
