import { Row, Col } from "antd";

const FeaturedAds = () => {
    return (
        <Row gutter={[16, 16]}>
        <Col span={12}>
          <div
            style={{
              height: "188px",
              textAlign: "center",
              lineHeight: "188px",
              borderRadius: "16px",
              background: "#F3F4FF"
            }}
          >
            Image 1
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              background: "#f0f0f0",
              height: "188px",
              textAlign: "center",
              lineHeight: "188px",
              borderRadius: "16px",
              backgroundColor: "#FFF3ED",

            }}
          >
            Image 2
          </div>
        </Col>
      </Row>
    );
}


export { FeaturedAds };