import { useState } from 'react';
import { FaSearch, FaThumbsUp, FaComment, FaWindowClose } from 'react-icons/fa';
import DiscussionModal from '../component/DiscussionModal';
import { compressImage } from '../utils/compressImage.js'

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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleNewTopicClick = () => setIsFormOpen(true);

    const handleLike = () => setLikeCount(likeCount + 1);

    const handleComment = (discussion) => {
        // Increment the comment count
        setCommentCount(prevCount => prevCount + 1);

        // Open the modal with the selected discussion
        openModal(discussion);
    };

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

    const handleImageChange = async (e) => {
        if (e.target.files && e.target.files[0]) {
            // setSelectedImage(URL.createObjectURL(e.target.files[0]));
            const file = e.target.files[0];

            if (file) {
                // Compress the image if it's larger than 500 KB
                if (file.size > 500 * 1024) { // 500 KB in bytes
                    const compressedFile = await compressImage(file);
                    console.log(compressedFile)
                    setSelectedImage(compressedFile);
                    // setSelectedImage(URL.createObjectURL(file));
                } else {
                    setSelectedImage(URL.createObjectURL(file));
                }
            }
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
            tags: tags.join(','), // Convert tags array to string
            links: links.join(','), // Convert links array to string
            image: selectedImage,
            privacy
        };
        console.log(newDiscussion)
        const newDiscussion1 = {
            title,
            content,
            tags: tags, // Convert tags array to string
            links: links,// Convert links array to string
            image: selectedImage,
            privacy
        };

        setDiscussions([...discussions, newDiscussion1]);

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
                <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                    <div className="sm:order-4 flex items-center w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4">
                        <div className="relative w-full sm:w-64">
                            <input
                                type="text"
                                className="w-full py-2 pl-10 pr-4 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-800 focus:border-DGXgreen focus:ring-DGXgreen"
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
                            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
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
            {modalIsOpen && selectedDiscussion && (
                <DiscussionModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    discussion={selectedDiscussion}
                />
            )}
                <div className="flex flex-col lg:flex-row w-full mx-auto bg-white rounded-md border border-gray-200 shadow-md mt-4 mb-4 p-4">
      <aside className="hidden lg:block lg:w-1/4 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Community Highlights</h2>
          <div className="space-y-4">
            {hotTopics.map((topic, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg p-4 border border-DGXblack transition-transform transform hover:scale-105 hover:shadow-xl"
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

      <section className="w-full lg:w-2/3 px-4">
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
            <div key={index} className="border border-gray-300 rounded-lg p-4 w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl">
              <div onClick={() => openModal(discussion)}>
                <h3 className="text-lg font-bold cursor-pointer md:text-lg lg:text-xl xl:text-2xl">
                  {discussion.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl">
                  {discussion.content.length > 500 ? (<> {discussion.content.substring(0, 497)} <span className='text-blue-700 cursor-pointer' onClick={() => { openModal(discussion) }}>...see more</span></>) : discussion.content}
                </p>
              </div>
              {discussion.image && (
                <div className="mt-2">
                  <img src={discussion.image} alt="Discussion" className="max-h-40 w-auto object-cover" />
                </div>
              )}
              <div className="mt-2 flex flex-wrap gap-2">
                {discussion.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-DGXgreen text-white rounded-full px-3 py-1 text-xs md:text-sm lg:text-base">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {discussion.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link} className="text-DGXgreen hover:underline text-xs md:text-sm lg:text-base">
                    {link}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <button className="flex items-center text-DGXgreen text-sm md:text-base lg:text-lg" onClick={handleLike}>
                  <FaThumbsUp className="mr-2" /> {likeCount} Likes
                </button>
                <button
                  className="flex items-center text-DGXgreen text-sm md:text-base lg:text-lg"
                  onClick={() => handleComment(discussion)}
                >
                  <FaComment className="mr-2" /> {commentCount} Comments
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="lg:hidden mt-8">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-DGXblue text-white py-2 px-4 rounded-lg w-full"
        >
          {isDropdownOpen ? 'Hide' : 'Show'} Community Highlights and Top Contributors
        </button>
        {isDropdownOpen && (
          <aside className="mt-4 px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Community Highlights</h2>
              <div className="space-y-4">
                {hotTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="rounded-lg shadow-lg p-4 border border-DGXblack transition-transform transform hover:scale-105 hover:shadow-xl"
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
        )}
      </div>
    </div>
        </div>
    );
};

export default Discussion;
