import type { Dish } from "./Dish";

export type Restaurant = {
  name: string;
  dishes: Dish[];
  timeForDelivery: string;
  isFeatured: boolean;
  isOpen?: boolean;
  imageUrl: string;
};
