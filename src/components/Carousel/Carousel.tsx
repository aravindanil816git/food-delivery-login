import { Carousel as ImageCarousel, Row, Typography } from "antd";
import "./Carousel.css";

const Carousel = ({ data }: CarouselProps) => {
  return (
    <ImageCarousel>
      {data.map((image, index) => (
        <div key={index}>
          <Row justify="center">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </Row>
          <div className="carousel-caption">
            <Typography.Title level={3} className="carousel-title">
              {image.title}
            </Typography.Title>
            <Typography.Text className="carousel-subtitle">
              {image.subTitle}
            </Typography.Text>
          </div>
        </div>
      ))}
    </ImageCarousel>
  );
};

type CarouselProps = {
  data: {
    src: string;
    alt: string;
    title: string;
    subTitle: string;
  }[];
};

export { Carousel, type CarouselProps };
