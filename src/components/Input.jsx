import React from 'react'
import img from '../assets/img.png'
import attach from '../assets/attach.png'
const Input = () => {
  return (
    <div className='Input'>
            <input type="text" placeholder='Message...'/>
            <div className="send">
            <img src={attach} alt="" />
            <input type="file" style={{display:'none'}} id='file'/>
            <label htmlFor="file">
              <img src={img} alt="" />
            </label>
            <button>Send</button>
      </div></div>
  )
}

export default Input;

