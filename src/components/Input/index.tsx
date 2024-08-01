"use client"

import { useState } from "react";
interface InputProps {
  type:string;
  pl: string;
}

const Input:React.FC<InputProps> = ({pl, type}) => {
  const [value, setValue] = useState("");
  return <input placeholder={pl} type={type}/>;
};

export default Input;
