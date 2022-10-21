import React from 'react'
import ImageCard from './ImageCard'
import styles from '../styles/CardPanel.module.css'

function CardPanel(props) {
  return (
    <div className={styles.div}>
      {props.numbers.map((n, index) => (
        <ImageCard
          key={index}
          number={n}
          id={index}
          clickHandler={props.clickHandler}
        />
      ))}
    </div>
  )
}

export default CardPanel
