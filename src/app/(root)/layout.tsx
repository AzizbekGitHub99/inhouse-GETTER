import type { Metadata } from "next";

import ChildrenType from "@/types/children";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "InHouse | GETTER",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: ChildrenType) {
  return <Fragment>{children}</Fragment>;
}
