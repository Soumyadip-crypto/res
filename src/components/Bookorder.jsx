import React, { useState } from 'react'

const Bookorder = ({ onSubmit }) => {
  const [orderId, setOrderId] = useState('')
  const [price, setPrice] = useState('')
  const [dish, setDish] = useState('')
  const [table, setTable] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ orderId, price, dish, table })
    setOrderId('')
    setPrice('')
    setDish('')
    setTable('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Unique Order Id:
        <input
          type="text"
          value={orderId}
          onChange={(event) => setOrderId(event.target.value)}
        />
      </label>
      <label>
        Price Of The Dish:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <label>
        Choose A Dish:
        <select value={dish} onChange={(event) => setDish(event.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="Paneer Butter Masala">Paneer Butter Masala</option>
          <option value="Chicken Biriyani">Chicken Biriyani</option>
          <option value="Chowmin">Chowmin</option>
          <option value="Momo">Momo</option>
        </select>
      </label>
      <label>
        Choose A table:
        <select value={table} onChange={(event) => setTable(event.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="Table1">Table1</option>
          <option value="Table2">Table2</option>
          <option value="Table3">Table3</option>
        </select>
      </label>
      <input type="submit" value="Add A bill" />
    </form>
  )
}

export default Bookorder