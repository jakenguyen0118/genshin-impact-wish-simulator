import React from 'react';
import gachaClip from '../assets/images/ui/gacha.mp4'

export default function Wish(props) {
  const { setView } = props
  return (
    <>
    <button
    onClick={() => setView('wish-results')}
    className="skip-button">Skip</button>
    <video
    autoPlay={true}
    className="min-vh-100 w-100 overflow-hidden"
    onEnded={() => setView('wish-results')}
    playsInline={true}
    >
      <source
        src={gachaClip}
        type="video/mp4"/>
    </video>
    </>
  )
}
