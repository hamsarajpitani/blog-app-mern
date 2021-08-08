import Header from "./Header";
import Footer from "./Footer";
import Signin from "../pages/signin";
const Layout = ({ children }) => {
  const user = true;
  return (
    <>
      {user ? (
        <Signin />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
