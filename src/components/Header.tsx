import React, { useEffect, useState } from 'react'
import "./Header.css"

const Header = () => {

    
  const [sticky, setSticky] = useState(false)


  useEffect(() =>{
    const handleScroll = () =>{
      setSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    <div className={`${sticky ? 'sticky' : 'list'}`}>
          <div>
              <h3>Name</h3>
          </div>
          <div>
              <h3>Email</h3>
          </div>
          <div>
              <h3>Gender</h3>
          </div>
          <div>
            <h3>IP Address</h3>
          </div>
          <div>
              <h3>Time</h3>
          </div>
      </div>
  )
}

export default Header
