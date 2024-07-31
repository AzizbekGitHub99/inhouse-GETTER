import Cookies from "js-cookie";
import request from "@/request";
import ProductType from "@/types/product";
import { create } from "zustand";
import CartProductType from "@/types/cartProducts";
import { persist } from "zustand/middleware";

interface StoreType {
  products: ProductType[];
  setProducts: (data: ProductType[]) => void;
  execute: () => Promise<void>;
}
interface CartStoreType {
  cartProducts: CartProductType[];
  setCartProducts: (data: CartProductType[]) => void;
  // increaseQuantity: (data: CartProductType[]) => void;
  // decreaseQuantity: (data: CartProductType[]) => void;
}

export const useStore = create<StoreType>((set) => ({
  products: [],
  setProducts: (data) => {
    set(() => ({ products: data }));
  },
  execute: async () => {
    try {
      const res = await request.get("products");
      set({ products: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
    }
  },
}));

export const useCartStore = create<CartStoreType>()(
  persist(
    (set) => {
      const cartProductsStr = Cookies?.get("cartProducts");
      const cartProducts = cartProductsStr ? JSON.parse(cartProductsStr) : [];
      return {
        cartProducts,
        setCartProducts: (data) => {
          set(() => ({ cartProducts: data }));
        }
      };
    },
    { name: "cartProducts" }
  )
);

// export const useCartStore = create<CartStoreType>((set)=>({
//     cartProducts: JSON.parse((Cookies?.get("cartProducts") as string )) || [],
//     setCartProducts: (data)=>{
//         set(() =>({cartProducts: data}))
//     },
// }))
