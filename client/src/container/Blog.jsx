import React, { useEffect, useState } from "react";
import { TbUserSquareRounded } from "react-icons/tb";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [pageSize, setPageSize] = useState(10);
    const [showAll, setShowAll] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "public/bg1.jpg",
        "public/bg2.jpg",
        "public/bg3.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
                setLoading(false); // Ensure loading is false even on error
            });
    }, []);

    const allCategories = [...new Set(blogs.map(blog => blog.category))];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const openModal = (blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    const Blog = ({ blog }) => {
        const { title, image, author, published_date } = blog || {};

        return (
            <div className="shadow-md shadow-gray-500 relative cursor-pointer" onClick={() => openModal(blog)}>
                <div>
                    <img className="w-full rounded" src={image} alt={title} />
                </div>
                <div className="pb-10 px-5">
                    <h3 className="mt-4 mb-2 font-bold hover:text-blue-600">{title}</h3>
                    <p className="mb-2 flex items-center gap-2 text-gray-500">
                        <TbUserSquareRounded className="text-black text-3xl" />
                        {author}
                    </p>
                    <p className="text-sm text-gray-500 translate-x-6">Published: {published_date}</p>
                </div>
            </div>
        );
    };

    const Modal = ({ blog }) => {
        const { title, image, author, published_date, content } = blog || {};

        return (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg w-full h-full max-w-full relative overflow-y-auto">
                    <button className="text-black text-xl absolute top-4 right-4" onClick={closeModal}>X</button>

                    <div className="flex flex-col items-center h-full">
                        <div className="w-full lg:w-1/2 mb-6">
                            <img className="w-full rounded" src={image} alt={title} />
                        </div>

                        <div className="w-full lg:w-2/3 lg:px-10">
                            <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
                            <p className="mb-2 text-gray-500 flex justify-center items-center gap-2">
                                <TbUserSquareRounded className="text-black text-3xl" />
                                {author}
                            </p>
                            <p className="mb-4 text-sm text-gray-500 text-center">Published: {published_date}</p>
                            <p className="text-lg text-justify">{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div
                className="py-20 md:py-40 bg-black text-center text-DGXgreen px-4 relative"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 1s ease-in-out',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-snug mb-5">
                        Welcome to Our Blog
                    </h1>
                    <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 text-sm md:text-base">
                        Start your blog today and join a community of writers and readers who are passionate about
                        sharing their stories and ideas. We offer everything you need to get started, from helpful tips
                        and tutorials.
                    </p>
                    <div className="font-medium hover:text-orange-500 inline-flex items-center gap-2">
                        Learn More 🔗
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-3">
                <div className="flex flex-wrap justify-center items-center p-4 space-x-2 space-y-2 md:space-y-2">
                    <button
                        className={`flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm h-8 font-semibold ${selectedCategory === null ? 'bg-DGXgreen text-black' : 'bg-DGXblue text-white'} rounded-full transition-colors duration-300 ease-in-out hover:bg-DGXorange hover:text-white`}
                        onClick={() => handleCategorySelect(null)}
                    >
                        All
                    </button>
                    {allCategories.map((category, index) => (
                        <button
                            key={index}
                            className={`flex items-center justify-center  px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 h-8 text-sm font-semibold ${selectedCategory === category ? 'bg-DGXgreen text-black' : 'bg-DGXblue text-white'} rounded-full transition-colors duration-300 ease-in-out hover:bg-DGXorange hover:text-white`}
                            onClick={() => handleCategorySelect(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                {/* Blogs List */}
                <div className="max-w-7xl mx-auto mb-10 px-4 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 transition-all duration-200">
                        {blogs
                            .filter(blog => selectedCategory === null || blog.category === selectedCategory)
                            .slice(0, pageSize)
                            .map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
                        }
                    </div>

                    {/* Show More Button */}
                    {blogs.filter(blog => selectedCategory === null || blog.category === selectedCategory).length > pageSize && !showAll && (
                        <div className="flex justify-center my-10">
                            <button
                                onClick={() => {
                                    const filteredBlogs = blogs.filter(blog => selectedCategory === null || blog.category === selectedCategory);
                                    if (pageSize + 5 >= filteredBlogs.length) {
                                        setShowAll(true);
                                    }
                                    setPageSize(pageSize + 5);
                                }}
                                className="px-6 py-2 md:px-8 md:py-4 text-sm md:text-lg bg-DGXblue text-white rounded-lg"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>

                {/* Modal */}
                {isModalOpen && selectedBlog && <Modal blog={selectedBlog} />}
            </div>
        </div>
    );
};


export default BlogPage;
