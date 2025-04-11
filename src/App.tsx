import { useReducer } from "react";
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db"
import { orderReducer, initialState } from "./reducer/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto p-5 grid md:grid-cols-2 gap-5">
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Menú</h2>
          <div className="space-y-5 mt-10 max-h-200 overflow-y-scroll">
            {menuItems.map(item => (
              <MenuItem 
                key={item.id} 
                item={item}
                dispatch= {dispatch}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          {state.order.length > 0 ? (
            <>
              <OrderContents 
                order={state.order}
                dispatch={dispatch}          
              />

              <TipPorcentageForm
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotals 
                order={state.order} 
                tip={state.tip}
                dispatch={dispatch} 
              />
            </>
          ) : (
            <p className="text-center text-gray-600">No hay elementos en el pedido</p>
          )}
        </div>

      </main>
    </>
  )
}

export default App;
