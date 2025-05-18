import { Input, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <Layout.Header
      style={{
        background: "#fff",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "0 10%",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "20px" }}
          />
          <Input
            type="text"
            placeholder="Search..."
            style={{
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              outline: "none",
            }}
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
