import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search'/>
      </div>
      <div className="userChat">
        <img src="https://i.pinimg.com/736x/ad/1b/5c/ad1b5c2bb33d69d2e1e6af58e7be7aaf.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search