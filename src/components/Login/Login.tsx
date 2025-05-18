import { Input, Button, Flex } from "antd";

export default function Login() {
  return (
    <div className="login-field-container">
      <div>
        <Input placeholder="name@example.com" />
        <br />
        <Input placeholder="min. 8 characters" />
        <br />
      </div>
      <Flex>
        <Button type="primary">Primary Button</Button>
      </Flex>
    </div>
  );
}
