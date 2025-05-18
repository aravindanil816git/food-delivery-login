import { Row, Col, Card } from "antd";
import { useUniqueRestaurantsByDishFilter } from "../../hooks/useUniqueRestaurantsByDishFilter";
import "./RestaurantList.css";
import type { Dish } from "../../types/Dish";

const RestaurantList = ({
  selectedDishes,
}: {
  selectedDishes: Dish[];
}) => {
  const restaurants = useUniqueRestaurantsByDishFilter(selectedDishes);

  return (
    <Row gutter={[24, 24]} className="restaurant-list-row">
      {restaurants.map((restaurant, index) => (
        <Col xs={24} sm={24} md={8} lg={8} xl={8} key={index}>
          <Card
            bordered
            hoverable
            className="restaurant-card"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#1890ff";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgb(238, 238, 238)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div
              style={{
                background: "#f0f0f0",
                height: "160px",
                textAlign: "center",
                lineHeight: "160px",
              }}
            >
              Image 2
            </div>
            <div className="restaurant-card-content">
              <div className="restaurant-card-title">{restaurant.name}</div>
              <div className="restaurant-card-time">
                🕑 {restaurant.timeForDelivery}
              </div>
              <div className="restaurant-card-dishes">
                {restaurant.dishes
                  .filter((dish) =>
                    selectedDishes.map((item) => item.name).includes(dish.name)
                  )
                  .map((dish, index) => (
                    <span className="restaurant-card-dish" key={index}>
                      {dish.icon}
                      {dish.name}
                    </span>
                  ))}
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export { RestaurantList };
