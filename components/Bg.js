import Image from 'next/image'
import React from 'react'

const Bg = () => {
  return (
    <div>
      <div className="blur-sm-10"
      style={{
        zIndex: -2,
        position: "absolute",
        width: "100vw",
        height: "100vh",
        
      }}>
        <Image 
          src="/bg.jpg"
          alt=""
          layout="fill"
          objectFit='cover'
          priority={false}
          
        />
    </div>
    </div>

  )
}

export default Bg
