import React from 'react'

interface ImageHeaderProps {
  imageURL: string | undefined
  alt: string | undefined
}
const ImageHeader: React.FC<ImageHeaderProps> = ({ imageURL, alt }) => {
  const styles = {
    container: {
      width: '1280px',
      height: '60vh',
      margin: '0 auto',
      backgroundImage: `url(${imageURL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }
  return <div style={styles.container}></div>
}

export default ImageHeader
