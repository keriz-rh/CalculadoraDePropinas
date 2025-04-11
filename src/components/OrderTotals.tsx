import { Dispatch, useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducer/order-reducer";

type OrderTotalsProps = {
    order: OrderItem[];    
    tip: number;
    dispatch: Dispatch<OrderActions>
}

function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

    const SubtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity 
    * item.price), 0), [order]);
    const tipAmount = useMemo(() => SubtotalAmount * tip, [tip, order]);
    const totalAmont = () => SubtotalAmount + tipAmount;

    return (
        <>
        <div
        className="p-5 bg-gray-100 rounded-lg shadow-md mt-3">
            <h2 className="text-2xl font-bold">Totales y Propina</h2>
            <p>
               Subtotal a pagar: {''}
                <span className="font-black">{ formatCurrency(SubtotalAmount) }</span>   
            </p>
            <p>
               Propina: {''}
                <span className="font-black">{ formatCurrency(tipAmount)}</span>   
            </p>
            <p>
               Total a pagar: {''}
                <span className="font-black">{ formatCurrency(totalAmont()) }</span>   
            </p>
        </div>

        <button 
        className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded mt-5
        disabled:opacity-50"
        type="button" 
        disabled={totalAmont() === 0}
        onClick={() => dispatch ({type: 'place-order'})}  
        >
        Guardar Orden
        </button>



        </>
    );
}

export default OrderTotals;