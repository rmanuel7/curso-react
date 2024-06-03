import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => 
  {
    const mouseMove = ({ clientX, clientY }) => setPosition({ x: clientX, y: clientY })
    const removefollower = ()=> document.getElementById('mousefollower').classList.add('d-none')
    const addfollower    = ()=> document.getElementById('mousefollower').classList.remove('d-none')

    if (enabled) 
    {
      window.addEventListener('mousemove', mouseMove)
      document.addEventListener('mouseleave', removefollower)
      document.addEventListener('mouseenter', addfollower)
    }
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseleave', removefollower)
      document.removeEventListener('mouseenter', addfollower)
    }

  }, [enabled])

  return (
    <>
      <div id='mousefollower' className='' style={{
        position: 'absolute',
        backgroundColor: 'rgb( 30, 144, 255, 0.3 )',
        border: '2px solid dodgerblue',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`
      }}></div>
      <div className="container text-center vh-100 border rounded p-0">
        
        <h1 className='border'>Hello React</h1>

        <button type='button' className='btn btn-outline-success' onClick={() => setEnabled(!enabled)}>
          Active follower pointer
        </button>
        
      </div>
    </>
  )
}

export default App
