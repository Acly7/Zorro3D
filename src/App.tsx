import { useState } from 'react'
import './App.scss'

export default function App() {
  const [personaje, setPersonaje] = useState(false)
  const [grande, setGrande] = useState(false)
  const [clicks, setClicks] = useState(0)

  return (
    <>
      <div className="panel">
        <button onClick={() => { setPersonaje(!personaje); setClicks(clicks + 1) }}>
          {personaje ? 'Ver cubo' : 'Ver personaje'}
        </button>
        <button onClick={() => { setGrande(!grande); setClicks(clicks + 1) }}>
          Tamaño
        </button>
        <span>Clics: {clicks}</span>
      </div>
      <a-scene arjs="sourceType: webcam" embedded vr-mode-ui="enabled: false" renderer="logarithmicDepthBuffer: true; precision: medium">
        <a-marker preset="hiro">
          <a-entity scale={grande ? '2 2 2' : '1 1 1'}
            animation="property: position; from: 0 0 0; to: 0 0.6 0; dir: alternate; loop: true; dur: 550; easing: easeInOutQuad">
            {personaje
              ? <a-gltf-model src="/Fox.glb" position="0 0 0" scale="0.006 0.006 0.006" />
              : <a-box position="0 0.5 0" color="#e63946" />}
          </a-entity>
        </a-marker>
        <a-entity camera />
      </a-scene>
    </>
  )
}

