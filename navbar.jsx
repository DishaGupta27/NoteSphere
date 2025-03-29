// import React from 'react'
import React, { useState } from "react"
import SearchBar from './SearchBar/SearchBar'
import ProfileInfo from './Cards/ProfileInfo'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    // const navigate = useNavigate()
    const handleSearch = () => {
        if (searchQuery) {
          onSearchNote(searchQuery)
        }
      }
    
      const onClearSearch = () => {
        setSearchQuery("")
        handleClearSearch()
      }
      const onLogout = async () => {

      }


  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <Link to={"/"}>
        <h2 className="text-xl font-medium text-black py-2">
          <span className="text-slate-500">Good</span>
          <span className="text-slate-900">Notes</span>
        </h2>
        {/* <SearchBar/> */}
        <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
        <ProfileInfo/>
    
      </Link>

     

      {/* <ProfileInfo userInfo={userInfo} onLogout={onLogout} /> */}
    </div>
  )
}

export default Navbar