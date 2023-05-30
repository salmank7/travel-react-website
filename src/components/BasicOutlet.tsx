import { Outlet } from "react-router";
import Header from "./Header";

const BasicOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default BasicOutlet;
