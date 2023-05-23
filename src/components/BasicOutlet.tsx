import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const BasicOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BasicOutlet;
