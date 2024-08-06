import { useState } from 'react';
import { FaSearch, FaThumbsUp, FaComment, FaWindowClose } from 'react-icons/fa';
import DiscussionModal from '../component/DiscussionModal';
import { images } from '../constant';

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
    const [discussions, setDiscussions] = useState([]);
    const [privacy, setPrivacy] = useState('private');
    const [selectedDiscussion, setSelectedDiscussion] = useState(null);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleNewTopicClick = () => setIsFormOpen(true);

    const handleLike = () => setLikeCount(likeCount + 1);

    const handleComment = () => setCommentCount(commentCount + 1);

    const openModal = (discussion) => {
        setSelectedDiscussion(discussion);
        setModalIsOpen(true);
    };

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

        const newDiscussion = {
            title,
            content,
            tags,
            links,
            image: selectedImage,
            privacy
        };

        setDiscussions([...discussions, newDiscussion]);

        // Reset the form fields
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
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-DGXblue text-sm py-4">

            </header>
            {modalIsOpen && selectedDiscussion && (
                <DiscussionModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    discussion={selectedDiscussion}
                />
            )}
            <div className="flex md:w-6/6 lg:w-6/6 md:flex mx-auto bg-white rounded-md border border-gray-200 shadow-md mt-4 mb-4 p-4">
                <aside className="lg:w-1/4 px-4">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Community Highlights</h2>
                        <div className="space-y-4">
                            {hotTopics.map((topic, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-DGXblue   rounded-lg shadow-lg p-4 border border-DGXblack transition-transform transform hover:scale-105 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold">
                                        <a href={topic.link} className="text-DGXblack hover:underline">
                                            {topic.title}
                                        </a>
                                    </h3>
                                    <p className="text-DGXblack mt-2">{topic.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Top Contributors</h2>
                        <div className="space-y-2">
                            {topUsers.map((user, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center bg-DGXblue border border-gray-200 rounded-lg shadow-sm p-3 hover:shadow-xl hover:scale-105 transition-colors"
                                >
                                    <span className="font-medium text-white">{user.name}</span>
                                    <span className="text-white">{user.points} points</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>


                <section className="lg:w-2/3 px-4">
                    <h2 className="text-2xl font-bold mb-4">{selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)} Discussions</h2>
                    <div className="flex flex-col space-y-4">
                        {isFormOpen && (
                            <form onSubmit={handleSubmit} className="border border-gray-300 rounded-lg p-4">
                                <h3 className="text-lg font-bold mb-4">Start a New Discussion</h3>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                                        Content
                                    </label>
                                    <textarea
                                        id="content"
                                        className="w-full px-3 py-2 border rounded-lg"
                                        rows="4"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">
                                        Tags
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg"
                                        value={tagInput}
                                        onChange={handleTagInputChange}
                                        onKeyPress={handleTagInputKeyPress}
                                        placeholder="Press Enter to add a tag"
                                    />
                                    <div className="mt-2 flex flex-wrap">
                                        {tags.map((tag, index) => (
                                            <div key={index} className="flex items-center bg-DGXgreen text-white rounded-full px-3 py-1 mr-2 mt-2">
                                                <span>{tag}</span>
                                                <button
                                                    type="button"
                                                    className="ml-2 focus:outline-none"
                                                    onClick={() => removeTag(tag)}
                                                >
                                                    <FaWindowClose />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">
                                        Links
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg"
                                        value={linkInput}
                                        onChange={handleLinkInputChange}
                                        onKeyPress={handleLinkInputKeyPress}
                                        placeholder="Press Enter to add a link"
                                    />
                                    <div className="mt-2 flex flex-wrap">
                                        {links.map((link, index) => (
                                            <div key={index} className="flex items-center bg-DGXgreen text-white rounded-full px-3 py-1 mr-2 mt-2">
                                                <span>{link}</span>
                                                <button
                                                    type="button"
                                                    className="ml-2 focus:outline-none"
                                                    onClick={() => removeLink(link)}
                                                >
                                                    <FaWindowClose />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {selectedImage && (
                                        <div className="mt-2">
                                            <img src={selectedImage} alt="Selected" className="max-h-40" />
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">
                                        Privacy
                                    </label>
                                    <select
                                        value={privacy}
                                        onChange={handlePrivacyChange}
                                        className="w-full px-3 py-2 border rounded-lg"
                                    >
                                        <option value="private">Private</option>
                                        <option value="protected">Protected</option>
                                        <option value="public">Public</option>
                                    </select>
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-DGXgreen text-white py-2 px-4 rounded-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>

                        )}
                        {discussions.map((discussion, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg p-4">
                                <h3 className="text-lg font-bold cursor-pointer" onClick={() => openModal(discussion)}>
                                    {discussion.title}
                                </h3>
                                <p className="text-gray-600">{discussion.content}</p>
                                {discussion.image && (
                                    <div className="mt-2">
                                        <img src={discussion.image} alt="Discussion" className="max-h-40" />
                                    </div>
                                )}
                                <div className="mt-2 flex flex-wrap">
                                    {discussion.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-DGXgreen text-white rounded-full px-3 py-1 mr-2 mt-2">{tag}</span>
                                    ))}
                                </div>
                                <div className="mt-2 flex flex-wrap">
                                    {discussion.links.map((link, linkIndex) => (
                                        <a key={linkIndex} href={link} className="text-DGXgreen hover:underline mr-2 mt-2">{link}</a>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center space-x-4">
                                    <button className="flex items-center text-DGXgreen" onClick={handleLike}>
                                        <FaThumbsUp className="mr-2" /> {likeCount} Likes
                                    </button>
                                    <button className="flex items-center text-DGXgreen" onClick={handleComment}>
                                        <FaComment className="mr-2" /> {commentCount} Comments
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>

    );
};

export default Discussion;