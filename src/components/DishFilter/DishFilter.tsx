import { Row, Col, Card } from "antd";
import { useState } from "react";
import { useUniqueDishes } from "../../hooks/useUniqueDishes";
import "./DishFilter.css";
import type { Dish } from "../../types/Dish";

const DishFilter = ({
  onSelectionChange,
}: {
  onSelectionChange: (selectedDishes: Dish[]) => void;
}) => {
  const dishes: Dish[] = useUniqueDishes();
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);

  const toggleDishSelection = (dish: Dish) => {
    const updatedSelection = selectedDishes.includes(dish)
      ? selectedDishes.filter((selected) => selected !== dish)
      : [...selectedDishes, dish];

    setSelectedDishes(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  return (
    <Row gutter={[16, 16]} className="dish-filter-row">
      {dishes.map((dish, index) => {
        const isSelected = selectedDishes.includes(dish);
        return (
          <Col xs={8} sm={6} md={4} key={index}>
            <Card
              key={index}
              hoverable
              onClick={() => toggleDishSelection(dish)}
              className={`dish-filter-card${isSelected ? " selected" : ""}`}
            >
              <div className="dish-filter-card-icon">{dish.icon}</div>
              <div className="dish-filter-card-name">{dish.name}</div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export { DishFilter };
