// @ts-ignore
import data from "../data.json";
import { Dish } from "../types/Dish";

export function useUniqueDishes(): Dish[] {
  const restaurants = data;
  const uniqueDishes = Array.from(
    new Map(
      restaurants
        .flatMap((restaurant: { dishes: any[] }) => restaurant.dishes)
        .map((dish: { name: string; icon: string }) => [dish.name, dish])
    ).values()
  );
  return uniqueDishes;
}
