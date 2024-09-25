import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa';

const BlogForm = ({blogs, setBlogs, setIsTableView}) => {
    
    const [title, setTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState('');

    const handleTagInputChange = (e) => setTagInput(e.target.value);

    const handleTagInputKeyPress = (e) => {
        if (e.key === 'Enter' && tagInput.trim() !== '') {
            e.preventDefault();
            setTags(tags + (tags ? ',' : '') + tagInput.trim());
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove) => {
        const tagArray = tags.split(',');
        const filteredTags = tagArray.filter((tag) => tag !== tagToRemove);
        setTags(filteredTags.join(','));
    };

    const compressImage = async (file) => {
        return URL.createObjectURL(file);
    };

    const handleImageChange = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const compressedFile = await compressImage(file);
            setSelectedImage(compressedFile);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            id: blogs.length + 1,
            title,
            image: selectedImage,
            category: "General",
            author: "You",
            authorPic: "author2.jpg",
            published_date: new Date().toLocaleDateString(),
            content,
            tags: tags.split(','),
        };
        setBlogs([...blogs, newBlog]);
        setIsTableView(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-4">Start a New Blog</h3>

                {/* Title Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title <span className="text-red-500">*</span></label>
                    <input id="title" type="text" className="w-full px-3 py-2 border rounded-lg" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                {/* Content Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="content">Content <span className="text-red-500">*</span></label>
                    <textarea id="content" className="w-full px-3 py-2 border rounded-lg" rows="4" value={content} onChange={(e) => setContent(e.target.value)} required />
                </div>

                {/* Privacy Select */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Privacy</label>
                    <select className="w-full px-3 py-2 border rounded-lg" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="category 1">Catagory 1</option>
                        <option value="category 2">Category 2</option>
                        <option value="category 3">Category 3</option>
                        <option value="category 4">Category 4</option>
                        <option value="category 5">Category 5</option>
                        <option value="category 6">Category 6</option>
                        <option value="category 7">Category 7</option>
                    </select>
                </div>

                {/* Tags Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Tags</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-lg" value={tagInput} onChange={handleTagInputChange} onKeyPress={handleTagInputKeyPress} placeholder="Press Enter to add a tag"/>
                    <div className="mt-2 flex flex-wrap">
                        {tags.split(',').filter(tag => tag).map((tag, index) => (
                            <div key={index} className="flex items-center bg-green-500 text-white rounded-full px-3 py-1 mr-2 mt-2">
                                <span>{tag}</span>
                                <button type="button" className="ml-2 focus:outline-none" onClick={() => removeTag(tag)}><FaWindowClose /></button>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Image Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Image Upload</label>
                    <input type="file" onChange={handleImageChange} />
                    {selectedImage && (<div className="mt-4"><img src={selectedImage} alt="Selected" className="w-32 h-32 object-cover" /></div>)}
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Publish</button>
            </form>
        </>
    )
}

export default BlogForm