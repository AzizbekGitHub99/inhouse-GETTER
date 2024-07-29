import RatingType from "./rating";

interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price:number;
  rating:RatingType;
  title: string;
}

export default ProductType;
