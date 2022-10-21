import React from 'react'
import { images } from '../images'
import styles from '../styles/ImageCard.module.css'

function ImageCard(props) {
  const handleClick = () => {
    props.clickHandler(props.number, props.id)
  }
  return (
    <div className={styles.divPortalBackground}>
      <div className={styles.div}>
        <img
          onClick={handleClick}
          className={styles.image}
          src={images[props.number]}
          alt='Character from Rick&Morty'
        />
      </div>
    </div>
  )
}

export default ImageCard
