import { useState } from 'react';
import { FaSearch, FaThumbsUp, FaComment, FaWindowClose } from 'react-icons/fa';
import DiscussionModal from '../component/DiscussionModal';

const Discussion = () => {
    const hotTopics = [
        { title: "Topic 1", link: "#", description: "Description for Topic 1" },
        { title: "Topic 2", link: "#", description: "Description for Topic 2" },
        { title: "Topic 3", link: "#", description: "Description for Topic 3" },
        { title: "Topic 4", link: "#", description: "Description for Topic 4" },
        { title: "Topic 5", link: "#", description: "Description for Topic 5" }
    ];

    const topUsers = [
        { name: "User 1", points: 1200 },
        { name: "User 2", points: 1100 },
        { name: "User 3", points: 1050 },
        { name: "User 4", points: 1020 },
        { name: "User 5", points: 980 }
    ];

    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [links, setLinks] = useState([]);
    const [linkInput, setLinkInput] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    // const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [privacy, setPrivacy] = useState('private');

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleNewTopicClick = () => setIsFormOpen(true);

    const handleLike = () => setLikeCount(likeCount + 1);

    const handleComment = () => setCommentCount(commentCount + 1);

    const openModal = () => setModalIsOpen(true);

    const closeModal = () => {
        setModalIsOpen(false);
        setIsFormOpen(false);
    };

    const handleTagInputChange = (e) => setTagInput(e.target.value);

    const handleTagInputKeyPress = (e) => {
        if (e.key === 'Enter' && tagInput.trim() !== '') {
            e.preventDefault();
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove) => setTags(tags.filter(tag => tag !== tagToRemove));

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
            setIsImageUploaded(true);
        }
    };

    const handleLinkInputChange = (e) => setLinkInput(e.target.value);

    const handleLinkInputKeyPress = (e) => {
        if (e.key === 'Enter' && linkInput.trim() !== '') {
            e.preventDefault();
            setLinks([...links, linkInput.trim()]);
            setLinkInput('');
        }
    };

    const removeLink = (linkToRemove) => setLinks(links.filter(link => link !== linkToRemove));

    const handlePrivacyChange = (e) => setPrivacy(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect form data from state
        console.log("Title:", title);
        console.log("Content:", content);
        console.log("Tags:", tags.join(', '));
        console.log("Links:", links.join(', '));
        console.log("Image:", selectedImage);
        console.log("Privacy:", privacy);

        // Handle form submission logic here, e.g., sending data to an API

        // After handling the form submission, you may want to reset the form fields
        setTitle('');
        setContent('');
        setTags([]);
        setLinks([]);
        setSelectedImage(null);
        setTagInput('');
        setLinkInput('');
        setIsFormOpen(false);
    };

    return (
        <div>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-DGXblue text-sm py-4 ">
                <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                    <div className="sm:order-4 flex items-center w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4">
                        <div className="relative w-full sm:w-64">
                            <input
                                type="text"
                                className="w-full py-2 pl-10 pr-4 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-800 focus:border-DGXgreen focus:ring-DGXgreen   "
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:order-3 flex items-center gap-x-2">
                        <button
                            type="button"
                            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                            aria-controls="navbar-alignment"
                            aria-label="Toggle navigation"
                            onClick={toggleNav}
                        >
                            <svg className={`${isNavOpen ? 'hidden' : 'block'} flex-shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className={`${isNavOpen ? 'block' : 'hidden'} flex-shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <div id="navbar-alignment" className={`${isNavOpen ? 'block' : 'hidden'} hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}>
                        <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                            <a className="text-lg font-bold text-DGXwhite cursor-pointer" onClick={() => setSelectedSection('all')} aria-current="page">All</a>
                            <a className="text-lg font-bold text-DGXwhite cursor-pointer" onClick={() => setSelectedSection('top')}>Top Discussions</a>
                            <a className="text-lg font-bold text-DGXwhite cursor-pointer" onClick={() => setSelectedSection('recent')}>Recent Discussions</a>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg bg-DGXgreen text-DGXwhite shadow-sm hover:bg-DGXblue hover:border-DGXgreen border border-DGXblue disabled:opacity-50 disabled:pointer-events-none"
                        onClick={handleNewTopicClick}
                    >
                        Start a New Topic +
                    </button>
                </nav>
            </header>
            {modalIsOpen && <DiscussionModal isOpen={modalIsOpen} onRequestClose={closeModal} />}
            <div className="flex  md:w-6/6 lg:w-6/6 flex-col md:flex-row px-4 py-8 space-y-6 md:space-y-0">
                <main className="w-full md:w-5/6 lg:w-5/6 mx-4 order-1 md:order-2">
                    {isFormOpen ? (
                        <section className="relative">
                            <h2 className="text-2xl font-bold text-DGXblue mb-4">Start a New Topic</h2>
                            <button
                                className="absolute top-0 right-0 mb-5 p-2 bg-DGXblue text-white rounded-full"
                                onClick={closeModal}
                            >
                                <FaWindowClose />
                            </button>
                            <form className="bg-gray-100 p-4 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-gray-700 ">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md "
                                        placeholder="Enter topic title"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="content" className="block text-gray-700 ">Content</label>
                                    <textarea
                                        id="content"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md "
                                        placeholder="Enter topic content"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="image" className="block text-gray-700 ">Upload Image</label>
                                    <input
                                        type="file"
                                        id="image"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md "
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {selectedImage && <img src={selectedImage} alt="Selected" className="mt-4 max-h-48" />}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="tags" className="block text-gray-700 ">Tags</label>
                                    <input
                                        type="text"
                                        id="tags"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md "
                                        placeholder="Enter tags and press enter"
                                        value={tagInput}
                                        onChange={handleTagInputChange}
                                        // onKeyPress={handleTagInputKeyPress}
                                    />
                                    <div className="mt-2 flex flex-wrap">
                                        {tags.map((tag, index) => (
                                            <span key={index} className="bg-DGXgreen text-DGXwhite rounded-full px-3 py-1 mr-2 mb-2 flex items-center">
                                                {tag}
                                                <button
                                                    type="button"
                                                    className="ml-2 text-sm text-red-600"
                                                    onClick={() => removeTag(tag)}
                                                >
                                                    &times;
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Links</label>
                                    <input
                                        type="text"
                                        value={linkInput}
                                        onChange={handleLinkInputChange}
                                        onKeyPress={handleLinkInputKeyPress}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-DGXgreen focus:border-DGXgreen sm:text-sm"
                                        placeholder="Enter links separated by commas"
                                    />
                                    <div className="mt-2">
                                        {links.map((link, index) => (
                                            <span key={index} className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-DGXblue rounded-full mr-2">
                                                {link}
                                                <button type="button" onClick={() => removeLink(link)} className="ml-2 text-white hover:text-gray-200">
                                                    <FaWindowClose />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="privacy" className="block text-gray-700 ">Privacy</label>
                                    <select
                                        id="privacy"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md "
                                    >
                                        <option value="private">Private</option>
                                        <option value="protected">Public</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className={`px-4 py-2 rounded-md shadow-sm bg-DGXgreen text-DGXwhite hover:bg-DGXblue`}
                                >
                                    Submit
                                </button>
                            </form>
                        </section>

                    ) : (
                        <>
                            {selectedSection === 'all' && (
                                <section className="bg-gray-100 p-4 rounded-lg shadow-lg border-DGXgreen border">
                                    <div className="flex flex-col md:flex-row md:max-w-xl lg:max-w-full bg-white rounded-lg overflow-hidden">
                                        <div className="w-full md:w-1/4">
                                            <img
                                                className="object-cover w-xsm h-20 md:h-auto md:rounded-none rounded-t-sm md:rounded-l-sm"
                                                // src={images.robo}
                                                alt="Technology"
                                            />
                                        </div>
                                        <div className="w-full md:w-3/4 p-4 flex flex-col justify-between">
                                            <h5 className="text-2xl font-bold text-gray-900 mb-2">
                                                Noteworthy Technology Acquisitions 2021
                                            </h5>
                                            <p className="text-gray-700 mb-2">
                                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                            </p>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-gray-500 text-sm">Posted 2 hours ago</span>
                                                <div className="flex items-center space-x-6 z-0">
                                                    <button
                                                        onClick={handleLike}
                                                        className="flex items-center text-gray-600 hover:text-DGXgreen transition-transform transform hover:scale-110 focus:outline-none"
                                                    >
                                                        <FaThumbsUp className="text-xl mr-1" />
                                                        <span className="text-sm font-medium">{likeCount}</span>
                                                    </button>
                                                    <button
                                                        onClick={handleComment}
                                                        className="flex items-center text-gray-600 hover:text-DGXgreen transition-transform transform hover:scale-110 focus:outline-none"
                                                    >
                                                        <FaComment className="text-xl mr-1" />
                                                        <span className="text-sm font-medium">{commentCount}</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                onClick={openModal}
                                                className="mt-2 text-DGXgreen hover:underline hover:text-DGXblue"
                                            >
                                                Be a part of the discussion
                                            </div>
                                        </div>
                                    </div>                                </section>

                            )}
                            {selectedSection === 'top' && (
                                <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-bold text-DGXblue mb-4">Top Discussions</h2>
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <h1 className="text-xl font-bold text-gray-900">TOP</h1>
                                        {/* Add content for Top Discussions here */}
                                    </div>
                                </section>
                            )}
                            {selectedSection === 'recent' && (
                                <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-bold text-DGXblue mb-4">Recent Discussions</h2>
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <h1 className="text-xl font-bold text-gray-900">RECENT</h1>
                                        {/* Add content for Recent Discussions here */}
                                    </div>
                                </section>
                            )}
                        </>
                    )}
                </main>

                <aside className="w-full md:w-1/6 lg:w-1/6 bg-gray-200 p-4 rounded-lg shadow-lg order-2 md:order-1">
                    <h2 className="text-xl font-bold mb-4">Hot Topics</h2>
                    {hotTopics.map((topic, index) => (
                        <div key={index} className="mb-2 p-2 bg-white rounded-lg shadow-md border border-DGXgreen ">
                            <a href={topic.link} className="text-lg font-semibold text-DGXblue  hover:underline">
                                {topic.title}
                            </a>
                            <p className="mt-2 text-gray-600 0">{topic.description}</p>
                        </div>
                    ))}
                </aside>

                <aside className="w-full md:w-1/6 lg:w-1/6 bg-gray-200 p-4 rounded-lg shadow-lg order-3 md:order-2">
                    <h2 className="text-xl font-bold mb-4">Top Users</h2>
                    {topUsers.map((user, index) => (
                        <div key={index} className="mb-2 p-2 bg-white rounded-lg shadow-md border border-DGXgreen ">
                            <div className="text-lg font-semibold text-DGXblue">
                                {user.name}
                            </div>
                            <p className="text-gray-600">Points: {user.points}</p>
                        </div>
                    ))}
                </aside>
            </div>


        </div>
    );
};

export default Discussion;
