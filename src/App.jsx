import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counterSlice'

import QRCode from 'qrcode'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [QR, setQR] = useState(null)

  
  const generateQR = async text => {
    try {
      let QRSrc = await QRCode.toDataURL(text)
      setQR(QRSrc)
    } catch (err) {
      console.error(err)
    }
  }



  useEffect(() => {
        generateQR('https://www.vitoapp.mx/home')
  },)
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {count}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment By 2
        </button>
      <img src={QR} alt="QR" />

      <a href={QR} download>Download image</a>
      </div>
    </>
  )
}

export default App
