// Result.jsx
import React from 'react'

const Result = ({ orders, onDelete }) => {
  const groupOrdersByTable = (orders) => {
    const groupedOrders = {}
    orders.forEach((order) => {
      if (!groupedOrders[order.table]) {
        groupedOrders[order.table] = []
      }
      groupedOrders[order.table].push(order)
    })
    return groupedOrders
  }

  const groupedOrders = groupOrdersByTable(orders)

  return (
    <div>
      <h2>Orders</h2>
      {['Table1', 'Table2', 'Table3'].map((table) => (
        <div key={table}>
          <h3>{table}</h3>
          {groupedOrders[table]?.map((order, index) => (
            <div key={index}>
              {order.price} - {order.dish}
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Result
