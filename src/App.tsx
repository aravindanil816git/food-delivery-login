import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./styles.css";
import { AppRoutes } from "./AppRoutes";

export default function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4E60FF ", // Ant Design green
          },
        }}
      >
        <Router>
          <AppRoutes />
        </Router>
      </ConfigProvider>
    </div>
  );
}
