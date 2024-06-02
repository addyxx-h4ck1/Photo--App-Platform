import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Pixelrart = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/pixelrart/foryou')
  }, [])
  return
}

export default Pixelrart
