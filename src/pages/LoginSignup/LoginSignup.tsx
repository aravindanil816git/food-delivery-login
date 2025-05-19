import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login/Login";
import "./LoginSignup.css";
import { Typography } from "antd";
import Logo from "../../assets/logo.svg";
import CarousalImg from "../../assets/Carousal1.png";
import { Carousel } from "../../components/Carousel/Carousel";

const carousalData = [
  {
    src: CarousalImg,
    alt: "Image 1",
    title: "Leave reviews for all meals",
    subTitle: "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.",
  },
  {
    src: CarousalImg,
    alt: "Image 2",
    title: "Leave reviews for all meals",
    subTitle: "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.",
  },
  {
    src: CarousalImg,
    alt: "Image 3",
    title: "Leave reviews for all meals",
    subTitle: "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.",
  },
];

const LoginSignup = () => {
  const navigate = useNavigate();

  const onLoginRedirect = () => {
    navigate("/");
  };

  return (
    <article className="page-container">
      <section className="login-container">
        <div className="login-form-container">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "20px" }}
          />
          <Typography.Title level={2}>Login</Typography.Title>
          <Typography.Text style={{ color: "#545563", textAlign: "left" }}>
            Sign in with your data that you entered during your registration.
          </Typography.Text>
          <Login onLoginRedirect={onLoginRedirect} />
        </div>
      </section>
      <section className="carousal-container">
        <Carousel data={carousalData} />
      </section>
    </article>
  );
};

export { LoginSignup };
