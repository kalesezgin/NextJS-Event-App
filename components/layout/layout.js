import MainHeader from "./main-header";
import Footer from "./footer";
const { Fragment } = require("react");

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
