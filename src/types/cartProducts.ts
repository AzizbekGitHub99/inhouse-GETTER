import RatingType from "./rating";

interface CartProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price:number;
  rating:RatingType;
  title: string;
  quantity: number;
}

export default CartProductType;
