import Login from "../components/Login/Login";
import "./Home.css";

export default function Home() {
  return (
    <article className="page-container">
      <section className="login-container">
        <div>
          <h2>Login</h2>
          <p>
            Sign in with your data that you entered during your registration.
          </p>
          <Login />
        </div>
      </section>
      <section className="carousal-container">Carousal</section>
    </article>
  );
}
