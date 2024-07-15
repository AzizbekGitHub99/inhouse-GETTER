"use client"

import { useState } from "react";
interface InputProps {
  pl: string;
}

const Input:React.FC<InputProps> = ({pl}) => {
  const [value, setValue] = useState("");
  return <input placeholder={pl} type="number" />;
};

export default Input;
