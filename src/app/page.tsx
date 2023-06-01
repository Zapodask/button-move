'use client'

import { useState } from 'react'

import style from './page.module.css'
import Image from 'next/image'

interface Position {
  x: string
  y: string
}

export default function Home() {
  const [position, setPosition] = useState<Position>({ x: '50%', y: '50%' })

  const mouseOver = () => {
    const newPositions = {
      x: `${Math.floor(Math.random() * 90)}%`,
      y: `${Math.floor(Math.random() * 90)}%`,
    }

    setPosition(newPositions)
  }

  const hancleClick = () => {
    alert('Você clicou no botão')
  }

  return (
    <div className={style.container}>
      <div className={style.target} onClick={hancleClick} onMouseOver={mouseOver} style={{ top: position.x, left: position.y }}>
        <div className={style.target_circle}>
          <div className={style.target_circle}/>
        </div>
      </div>
    </div>
  );
}
