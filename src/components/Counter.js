import React, { useEffect, useState } from 'react'
import styles from '../styles/Counter.module.css'

function Counter(props) {
  const [style, setstyles] = useState(styles.counter)

  useEffect(() => {
    setstyles((prev) => prev.concat(` ${styles.animate}`))
    setTimeout(() => {
      setstyles(styles.counter)
    }, 1000)
  }, [props.counter])

  return <div className={style}>{props.counter}</div>
}

export default Counter
