import { useEffect } from "react";
import { useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return [blogs];
};

export default useBlogs;
