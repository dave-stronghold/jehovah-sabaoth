import React from "react";
import Header2 from "../header/Header2";
import Footer2 from "../footer/Footer2";
import Breadcrumb from "../common/Breadcrumb";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const route = useRouter();
  const path = route.pathname
  return (
    <>
      <Header2 />
      <Breadcrumb/> 
      {children}
      <Footer2 />
    </>
  );
};

export default MainLayout;
