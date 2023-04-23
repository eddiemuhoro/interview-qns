import React, { useState, useEffect } from 'react'

const Images = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1510148832187-bfeaf1fa16d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1537083237872-3820917923d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])
  
  return (
    <div style={{ width: '500px', height: '500px', overflow: 'hidden' }}>
      <div style={{
        display: 'flex',
        width: `${images.length}00%`,
        transform: `translateX(-${currentImage * (100 / images.length)}%)`,
        transition: 'transform 0.5s ease-in-out'
      }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image${index}`} style={{ height: '100%', width: `${100 / images.length}%`, objectFit: "cover" }} />
        ))}
      </div>
    </div>
  )
}

export default Images
