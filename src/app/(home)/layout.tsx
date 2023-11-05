import HomeLayout from "@/layouts/home-layout/home-layout";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function layout({ children }: Props) {
  return <HomeLayout>{children}</HomeLayout>;
}
