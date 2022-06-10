import React from 'react'
import { useState } from 'react'
import EmptyList from '../../components/Home/Header/Common/Chip/EmptyList/EmptyList'
import BlogList from './BlogList/BlogList'
import Header from '../../components/Home/Header/Header'
import Searchbar from '../../components/Home/Header/SearchBar/Searchbar'
import { blogList } from '../../config/data'
// import BlogList from './BlogList/BlogList'
// import { blogList } from '../../config/data'
const Home = () => {

    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');
  
    // Search submit
    const handleSearchBar = (e) => {
      e.preventDefault();
      handleSearchResults();
    };
  
    // Search for blog by category
    const handleSearchResults = () => {
      const allBlogs = blogList;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setBlogs(filteredBlogs);
    };
  
    // Clear search and show all blogs
    const handleClearSearch = () => {
      setBlogs(blogList);
      setSearchKey('');
    };
  
    return (
      <div>
        {/* Page Header */}
        <Header />
  
        {/* Search Bar */}
        <Searchbar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
  
        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
    );




//   return (
//     <div>
//       <h1> Home page</h1>
//       {/* page header */}
//         <Header />

//       {/* search bar */}
//         <Searchbar />
//       {/* bolg list and empty list */}

//       <BlogList blogs={blogList} />

//     </div>
//   )

}

export default Home
