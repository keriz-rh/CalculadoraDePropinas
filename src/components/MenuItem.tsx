import type { MenuItem } from "../types";

type MenuItemProps = {
     item: MenuItem
     addItem: (item: MenuItem) => void
};
export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
          <button
          className=" border-2  border-teal-400 hover: w-full hover:bg-teal-400 hover:text-white p-5 rounded-lg flex flex-col items-center gap-2"
          onClick={() => addItem(item)}
          >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
          </button>
    );
}
