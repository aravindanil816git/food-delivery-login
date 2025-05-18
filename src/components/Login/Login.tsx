import { Input, Button, Flex, Typography, Checkbox } from "antd";
import { useReducer } from "react";

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

const Login = ({ onLoginRedirect }: LoginProps) =>{
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="login-field-container">
      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <Typography.Title level={5}>Email</Typography.Title>
        <Input
          id="email"
          placeholder="name@example.com"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
        <br />
        <Typography.Title level={5}>Password</Typography.Title>
        <Input.Password
          placeholder="min. 8 characters"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          visibilityToggle
        />
        <Checkbox
        style={{ marginTop: "20px", fontSize: "12px" }}
          checked={state.keepMeLoggedIn}
          onChange={() => dispatch({ type: "TOGGLE_KEEP_ME_LOGGED_IN" })}
        >
         Keep me logged in
        </Checkbox>
      </div>
      <Button type="primary" onClick={onLoginRedirect} style={{ width: "100%", height: "44px" }}>
        Login
      </Button>

      <div className="forgot-password-container">
        <Button type="link" className="forgot-password-link" style={{ marginTop: "40px" }}>
          Forgot password?
        </Button>
      </div>

      <div className="signup-container">
        <p>
          Don't have an account?{" "}
          <Button type="link" className="signup-link">
            Sign up
          </Button>
        </p>
      </div>
    </div>
  );
}


export { Login };