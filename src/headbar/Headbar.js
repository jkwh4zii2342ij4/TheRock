import React from 'react'
import "./headbar.css"
import SoundPlayer from "./SoundPlayer"

function Headbar() {
  return (
    <div className='headbar'>
        <h1 className='header_titel'>Dwayne "The Rock" Johnson</h1>
        <SoundPlayer />
    </div>
  )
}

export default Headbar