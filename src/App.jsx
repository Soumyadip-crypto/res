// App.jsx
import React, { useState, useEffect } from 'react'
import Bookorder from './components/Bookorder'
import Result from './components/Result'

const App = () => {
  
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders')
    return storedOrders ? JSON.parse(storedOrders) : []
  })

  useEffect(() => {
  
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  const handleOrderSubmit = (order) => {
    setOrders((prevOrders) => [...prevOrders, order])
  }

  const handleOrderDelete = (index) => {
    setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index))
  }

  return (
    <div>
      <Bookorder onSubmit={handleOrderSubmit} />
      <Result orders={orders} onDelete={handleOrderDelete} />
    </div>
  )
}

export default App
