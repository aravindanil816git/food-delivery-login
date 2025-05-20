import { Row, Col, Typography } from "antd";
import "./FeaturedAds.css";

const FeaturedAdsData = [
  {
    image: "./cupcake.svg",
    title: "All deserts",
    offerTitle: "20% OFF",
    category: "Deserts",
    highlightcolor: "#4E60FF",
    colorScheme: "#F3F4FF",
  },
  {
    image: "./burger.svg",
    title: "Featured Ad 2",
    offerTitle: "50% OFF",
    category: "Foodies",
    highlightcolor: "#FD6D22",
    colorScheme: "#FFF3ED",
  },
];

const FeaturedAds = () => {
  return (
    <Row gutter={[16, 16]}>
      {FeaturedAdsData.map((ad, index) => (
        <Col xs={24} md={12} key={index}>
          <div
            className="featured-ad"
            style={{ backgroundColor: ad.colorScheme }}
          >
            <img src={ad.image} alt={ad.title} className="featured-ad-image" />
            <div className="featured-ad-content">
              <div className="featured-ad-title-offer-category-row">
                <Typography.Title className="featured-ad-title" level={5}>{ad.title}</Typography.Title>
                <Typography.Text className="featured-ad-category">{ad.category}</Typography.Text>
              </div>
              <Typography.Title
                level={1}
                className="featured-ad-offer"
                style={{ color: ad.highlightcolor }}
              >
                {ad.offerTitle}
              </Typography.Title>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

type FeaturedAds = {
  image: string;
  title: string;
  offerTitle: string;
  category: string;
  highlightcolor: string;
  colorScheme: string;
};

export { FeaturedAds };
