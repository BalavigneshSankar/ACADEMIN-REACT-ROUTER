import { Outlet } from "react-router-dom";
import Mainnavigation from "./components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <Mainnavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
