import React from 'react'
import useAnimatedCanvas from '../hooks/useAnimatedCanvas'

const AnimatedBackground = () => {
  const canvasRef = useAnimatedCanvas();
  
    return (
      <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  )
}

export default AnimatedBackground