import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder"

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto p-5 grid md:grid-cols-2 gap-5">
        
        {/* Sección del Menú */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Menú</h2>
          <div className="space-y-5 mt-10 max-h-200 overflow-y-scroll">
            {menuItems.map(item => (
              <MenuItem 
                key={item.id} 
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        {/* Sección del Pedido */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          {order.length > 0 ? (
            <>
              <OrderContents 
                order={order}
                removeItem={removeItem}  
              />

              <TipPorcentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals 
                order={order} 
                tip={tip}
                placeOrder={placeOrder} 
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
