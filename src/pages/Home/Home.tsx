import { Row, Col, Card, Typography } from "antd";
import { RestaurantList } from "../../components/RestaurantList/RestaurantList";
import { DishFilter } from "../../components/DishFilter/DishFilter";
import { useState } from "react";
import { FeaturedAds } from "../../components/FeaturedAds/FeaturedAds";
import { Dish } from "../../types/Dish";

const Home = () => {
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>(
    []
  );

  return (
    <div className="home-container">
    <FeaturedAds />
      <DishFilter onSelectionChange={(dishes) => setSelectedDishes(dishes)} />
      <Row>
        <Typography.Title level={4}>Nearby restaurants</Typography.Title>
      </Row>
      <RestaurantList selectedDishes={selectedDishes} />
    </div>
  );
};

export { Home };
