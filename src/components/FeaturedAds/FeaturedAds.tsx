import { Row, Col } from "antd";
import "./FeaturedAds.css";

const FeaturedAds = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
                <div className="featured-ad featured-ad-1">
                    Image 1
                </div>
            </Col>
            <Col xs={24} md={12}>
                <div className="featured-ad featured-ad-2">
                    Image 2
                </div>
            </Col>
        </Row>
    );
}

export { FeaturedAds };