import ResponsiveAppBar from "@/components/app-bar/app-bar";
import Footer from "@/components/footer/footer";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
}
