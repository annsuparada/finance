import React from 'react'

interface ImageHeaderProps {
  imageURL: string | undefined
  alt: string | undefined
}
const ImageHeader: React.FC<ImageHeaderProps> = ({ imageURL, alt }) => {
  const styles = {
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    img: {
      width: '100%',
      height: 'auto',
    },
  }
  return (
    <div style={styles.container}>
      <img src={imageURL} alt={alt} style={styles.img} />
    </div>
  )
}

export default ImageHeader
