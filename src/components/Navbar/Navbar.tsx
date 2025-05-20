import { Input, Layout, Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
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
  ];

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
        <div className="navbar-menu-desktop">
          <Menu
            mode="horizontal"
            items={menuItems.map((item) => ({ ...item, key: item.key }))}
          />
        </div>
        <Button
          className="navbar-hamburger"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
        />
        <Drawer
          title={<img src={Logo} alt="Logo" className="navbar-logo" />}
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="navbar-drawer"
        >
          <Menu
            mode="vertical"
            items={menuItems}
            onClick={() => setDrawerVisible(false)}
          />
        </Drawer>
      </div>
    </Layout.Header>
  );
}

export { Navbar };
