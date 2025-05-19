import { Input, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <Layout.Header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <Input
            type="text"
            placeholder="Search..."
            className="navbar-search-input"
          />
        </div>
        <Menu
          mode="horizontal"
          items={[
            {
              key: "restaurant",
              label: <Link to="/restaurant">Restaurant</Link>,
            },
            {
              key: "deals",
              label: <Link to="/deals">Deals</Link>,
            },
            {
              key: "my-order",
              label: <Link to="/my-order">My Order</Link>,
            },
          ]}
        />
      </div>
    </Layout.Header>
  );
}

export { Navbar };
