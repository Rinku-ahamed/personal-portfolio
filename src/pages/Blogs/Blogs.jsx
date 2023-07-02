import { Helmet } from "react-helmet";
import useBlogs from "../../hooks/useBlogs";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs] = useBlogs();
  return (
    <div>
      <Helmet>
        <title>Blogs | Personal Portfolio</title>
      </Helmet>
      <h2 className="text-3xl md:text-4xl font-Karla text-center text-sky-700 font-bold">
        Latest Blogs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
