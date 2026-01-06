import { useState } from 'react'
import Card1 from './components/Card1'
import Counter from './components/Counter'
import Chailist from './components/Chailist'
import type { Chai } from './type'
import OrderForm from './components/OrderForm'


const menu: Chai[] = [
  { id: 1, name: "Masala", price: 25 },
  { id: 2, name: "Ginger2", price: 25 },
  { id: 3, name: "Lemon", price: 65 },
];

function App() {

  return (
    <>
      <div>
        <Card1
          name={"Zaidkhan"}
          price={22}
          isSpecial={false}
        />
      </div>
      <div>
        <Counter />
        <OrderForm onSubmit={(order) => console.log("Placed", order.name, order.cups)} />
      </div>
    </>
  )
}

export default App
