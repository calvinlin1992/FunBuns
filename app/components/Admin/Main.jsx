import React from 'react'
import { AdminNavBar } from './AdminNav'
import OrdersContainer from '../Orders/OrdersContainer'

const Main = (props) =>
   (
    <div>
      <AdminNavBar />
      <OrdersContainer />
    </div>
  )

export default Main
