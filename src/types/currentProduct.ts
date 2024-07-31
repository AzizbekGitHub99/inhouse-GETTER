import RatingType from "./rating";

interface CurrenProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price:number;
  rating:RatingType;
  title: string;
  quantity?: number;
}

export default CurrenProductType;
