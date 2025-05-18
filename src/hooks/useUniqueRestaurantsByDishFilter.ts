// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import data from "../data.json";
import type { Dish } from "../types/Dish";
import type { Restaurant } from "../types/Restaurant";

export function useUniqueRestaurantsByDishFilter(dishes: Dish[]): Restaurant[] {
  if (!data) return [];
  if (dishes.length === 0) return data;
  const filteredRestaurants = data.filter(
    (restaurant: { dishes: { name: string; icon: string }[] }) =>
      dishes.some((dish) =>
        restaurant.dishes.some(
          (restaurantDish) => restaurantDish.name === dish.name
        )
      )
  );
  console.log("Filtered Restaurants: ", filteredRestaurants);
  return filteredRestaurants;
}
