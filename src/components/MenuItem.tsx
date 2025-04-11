import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducer/order-reducer";

type MenuItemProps = {
     item: MenuItem
      dispatch: Dispatch<OrderActions>
    };
export default function MenuItem({ item, dispatch }: MenuItemProps) {
    return (
          <button
          className=" border-2  border-teal-400 hover: w-full hover:bg-teal-400 hover:text-white p-5 rounded-lg flex flex-col items-center gap-2"
          onClick={() => dispatch({type: 'add-item', payload: {item} })}
          >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
          </button>
    );
}
