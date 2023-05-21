'use client'

import { useState } from 'react'

import style from './page.module.css'

interface Position {
  x: string
  y: string
}

export default function Home() {
  const [position, setPosition] = useState<Position>({ x: '0%', y: '0%' })

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
    <button className={style.btn} onClick={hancleClick} onMouseOver={mouseOver} style={{ top: position.x, left: position.y }}>
      Clique aqui
    </button>
  );
}
