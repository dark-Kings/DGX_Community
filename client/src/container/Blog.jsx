import { useEffect, useState } from "react";
import { TbUserSquareRounded } from "react-icons/tb";

// Main Blogs Component
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [pageSize, setPageSize] = useState(10);
    const [showAll, setShowAll] = useState(false);

    // Fetch blogs data
    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    // Unique categories
    const allCategories = [...new Set(blogs.map(blog => blog.category))];

    // Handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    // Blog Component (Nested)
    const Blog = ({ blog }) => {
        const { title, image, author, published_date } = blog || {};

        return (
            <div className="shadow-md shadow-gray-500">
                <div>
                    <img className="w-full rounded" src={image} alt={title} />
                </div>
                <div className="pb-10 px-5">
                    <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{title}</h3>
                    <p className="mb-2 flex items-center gap-2 text-gray-500">
                        <TbUserSquareRounded className="text-black text-3xl" />
                        {author}
                    </p>
                    <p className="text-sm text-gray-500 translate-x-6">Published: {published_date}</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            {/* Page Header */}
            <div className="py-40 bg-black text-center text-white px-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Blog Page</h1>
            </div>

            {/* Category Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    className={`btn ${selectedCategory === null ? 'bg-orange-500 text-black' : 'bg-black text-orange-500'} hover:bg-orange-500 hover:text-black`}
                    onClick={() => handleCategorySelect(null)}
                >
                    All
                </button>
                {allCategories.map((category, index) => (
                    <button
                        key={index}
                        className={`btn ${selectedCategory === category ? 'bg-orange-500 text-black' : 'bg-black text-orange-500'} hover:bg-orange-500 hover:text-black`}
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Blogs List */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-20 transition-all duration-200">
                    {blogs
                        .filter(blog => selectedCategory === null || blog.category === selectedCategory)
                        .slice(0, pageSize)
                        .map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>

                {/* Show More Button */}
                {blogs.filter(blog => selectedCategory === null || blog.category === selectedCategory).length > pageSize && !showAll && (
                    <div className="flex justify-center my-10">
                        <button onClick={() => setPageSize(pageSize + 5)} className="btn btn-md bg-black text-orange-500 hover:bg-orange-500 hover:text-black">
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
