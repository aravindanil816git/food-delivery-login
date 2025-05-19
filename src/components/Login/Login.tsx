import { Input, Button, Typography, Checkbox } from "antd";
import { useReducer, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

type State = {
  email: string;
  password: string;
  keepMeLoggedIn: boolean;
};

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "TOGGLE_KEEP_ME_LOGGED_IN" };

const initialState: State = {
  email: "",
  password: "",
  keepMeLoggedIn: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "TOGGLE_KEEP_ME_LOGGED_IN":
      return { ...state, keepMeLoggedIn: !state.keepMeLoggedIn };
    default:
      return state;
  }
}

type LoginProps = {
  onLoginRedirect: () => void;
};

const Login = ({ onLoginRedirect }: LoginProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { login } = useAuth();
  const [touched, setTouched] = useState(false);

  const isEmailValid = state.email.includes("@");
  const isPasswordValid = state.password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  const onLoginSubmit = () => {
    setTouched(true);
    if (isFormValid) {
      login(state.email, state.password, state.keepMeLoggedIn);
      onLoginRedirect();
    }
  };

  return (
    <div className="login-field-container">
      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <Typography.Title level={5} style={{ color: "#545563" }}>Email</Typography.Title>
        <Input
          id="email"
          placeholder="name@example.com"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          status={touched && !isEmailValid && state.email ? "error" : ""}
        />
        {touched && !isEmailValid && state.email && (
          <Typography.Text type="danger">
            Please enter a valid email address.
          </Typography.Text>
        )}
        <br />
        <Typography.Title level={5} style={{ color: "#545563" }}>Password</Typography.Title>
        <Input.Password
          placeholder="min. 8 characters"
          value={state.password}
          required
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          visibilityToggle
          status={
            touched && state.password.length > 0 && !isPasswordValid
              ? "error"
              : ""
          }
        />
        {touched && state.password.length > 0 && !isPasswordValid && (
          <Typography.Text type="danger">
            Password must be at least 8 characters long.
          </Typography.Text>
        )}
        <Checkbox
          style={{ marginTop: "20px", fontSize: "12px" }}
          checked={state.keepMeLoggedIn}
          onChange={() => dispatch({ type: "TOGGLE_KEEP_ME_LOGGED_IN" })}
        >
          Keep me logged in
        </Checkbox>
      </div>
      <Button
        type="primary"
        onClick={onLoginSubmit}
        style={{ width: "100%", height: "44px"}}
        disabled={touched && !isFormValid}
      >
        Login
      </Button>

      <div className="forgot-password-container">
        <Button
          type="link"
          className="forgot-password-link"
          style={{ marginTop: "40px", color: "#4E60FF" }}
        >
          Forgot password?
        </Button>
      </div>

      <div className="signup-container">
        <p>
          Don't have an account?{" "}
          <Button type="link" className="signup-link" style={{ color: "#4E60FF" }}>
            Sign up
          </Button>
        </p>
      </div>
    </div>
  );
};

export { Login };