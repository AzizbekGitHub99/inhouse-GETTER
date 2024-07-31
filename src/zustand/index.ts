import request from "@/request";
import ProductType from "@/types/product";
import { create } from "zustand";

interface StoreType {
    products: ProductType[];
    setProducts: (data: ProductType[]) => void;
    execute:() => Promise<void>;
}
interface CartStoreType {
    cartProducts: ProductType[];
    setCartProducts: (data: ProductType[]) => void
}

export const useStore = create<StoreType>((set)=>({
    products: [],
    setProducts: (data)=>{        
        set(() =>({products: data}))
    },
    execute: async () => {
        try {
          const res = await request.get("products");
          set({products: res.data });
        } catch (err) {
          console.error("Error in data fetch:", err);
        }
      },
}))

export const useCartStore = create<CartStoreType>((set)=>({
    cartProducts: JSON.parse((window?.localStorage?.getItem("cartProducts") as string )) || [],
    setCartProducts: (data)=>{
        set(() =>({cartProducts: data}))
    },
}))