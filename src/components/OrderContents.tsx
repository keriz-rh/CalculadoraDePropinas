import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducer/order-reducer";

type OrderContentsProps = {
    order: OrderItem[];
    dispatch: Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold">Consumo</h2>


            <div className="mt-10 max-h-[500px] overflow-y-scroll">
                {
                    order.map(item => (
                        <div key={item.id}
                            className="flex justify-between border-t
                         border-gray-200 last-of-type:border-b py-2 items-center-safe">
                            <div>
                                <p className="text-lg font-bold">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {formatCurrency(item.price)}
                                </p>
                           
                                <p className="text-sm font-bold ">
                                    Cantidad: {item.quantity}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            <div>
                                <button
                                  className="bg-red-500 text-white 
                                  rounded-lg px-2 py-1 mt-2"                                 
                                  onClick={() => dispatch({type: 'remove-item', payload: {
                                    id: item.id
                                  }})}>
                                    X
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
