// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import data from "../data.json";
import type { Dish } from "../types/Dish";
import type { Restaurant } from "../types/Restaurant";

export function useUniqueDishes(): Dish[] {
  const restaurants = data as Restaurant[];
  const uniqueDishes = Array.from(
    new Map(
      restaurants
        .flatMap((restaurant: { dishes: Dish[] }) => restaurant.dishes)
        .map((dish: { name: string; icon: string }) => [dish.name, dish])
    ).values()
  );
  return uniqueDishes;
}
