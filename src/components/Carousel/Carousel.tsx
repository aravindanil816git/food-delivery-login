import { Carousel as ImageCarousel, Row, Typography } from "antd";

const Carousel = ({ data }: CarouselProps) => {
  return (
    <ImageCarousel>
      {data.map((image, index) => (
        <div key={index}>
          <Row justify="center">
            <img src={image.src} alt={image.alt} style={{ width: "50%" }} />
          </Row>
          <div style={{ maxWidth: "50%", margin: "0 auto", textAlign: "center" }}>
            <Typography.Title level={3} style={{ color: "#fff" }}>
              {image.title}
            </Typography.Title>
            <Typography.Text style={{ color: "#fff" }}>
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
