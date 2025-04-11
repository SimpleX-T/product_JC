import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
