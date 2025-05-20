import { Input, Button, Typography, Checkbox, Spin } from "antd";
import { useReducer, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import "./Login.css";

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
  const { register, login, loading, error } = useAuth();
  const [touched, setTouched] = useState(false);
  const [signUpMode, setSignUpMode] = useState(false);

  const isEmailValid = state.email.includes("@");
  const isPasswordValid = state.password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  const onLoginSubmit = async () => {
    setTouched(true);
    if (isFormValid) {
      if(signUpMode) {
        await register(state.email, state.password);
      }
      else {
        await login(state.email, state.password);
      }
      if (!loading && !error) {
        onLoginRedirect();
      }
      setTouched(false);
    }
  };

  return (
    <>
      <Typography.Title level={2} className="login-title">
        {signUpMode ? "SignUp" : "Login"}
      </Typography.Title>
      <Typography.Text className="login-description">
        Sign in with your data that you entered during your registration.
      </Typography.Text>
      <div className="login-field-container">
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <Typography.Title level={5} className="login-label">
            Email
          </Typography.Title>
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
          <Typography.Title level={5} className="login-label">
            Password
          </Typography.Title>
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
            className="keep-me-logged-in"
            checked={state.keepMeLoggedIn}
            onChange={() => dispatch({ type: "TOGGLE_KEEP_ME_LOGGED_IN" })}
          >
            Keep me logged in
          </Checkbox>
        </div>
        <Button
          type="primary"
          onClick={onLoginSubmit}
          className="login-button"
          disabled={loading || (touched && !isFormValid)}
        >
          {loading ? <Spin /> : signUpMode ? "Register" : "Login"}
        </Button>
        <Typography.Text type="danger">{error}</Typography.Text>
        <div className="forgot-password-container">
          <Button
            type="link"
            className="forgot-password-link"
          >
            Forgot password?
          </Button>
        </div>

        <div className="signup-container">
          <p>
            {!signUpMode ? "Don't have an account" : "Already have an account?"}
            <Button
              type="link"
              className="signup-link"
              onClick={() => {
                setSignUpMode(!signUpMode);
                setTouched(false);
              }}
            >
              {!signUpMode ? "Sign up" : "Login in"}
            </Button>
          </p>
        </div>
      </div>
    </>
  );
};

export { Login };
