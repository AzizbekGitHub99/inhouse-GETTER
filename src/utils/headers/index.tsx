'use client'
import { usePathname } from "next/navigation";
import HeaderOne from "@/components/header-one";
import HeaderSecond from "@/components/header-second";

const Header = () => {
  const pathname = usePathname();

  return <>{pathname == "/" ? <HeaderOne /> : <HeaderSecond />}</>;
};

export default Header;
