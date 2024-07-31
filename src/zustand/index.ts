import ProductType from "@/types/product";
import { create } from "zustand";

interface StoreType {
    products: ProductType[];
    setProducts: (data: ProductType[]) => void
}
interface CartStoreType {
    cartProducts: ProductType[];
    setCartProducts: (data: ProductType[]) => void
}

export const useStore = create<StoreType>((set)=>({
    products: [],
    setProducts: (data)=>{        
        set(() =>({products: data}))
    }
}))

export const useCartStore = create<CartStoreType>((set)=>({
    
    cartProducts: JSON.parse((localStorage?.getItem("cartProducts") as string )) || [],
    setCartProducts: (data)=>{
        set(() =>({cartProducts: data}))
    },
}))