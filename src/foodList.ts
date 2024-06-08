import foodData from '../public/data.json';

// Define types
type Food = {
  id: number;
  name: string;
  calories: number;
  cholesterol: number;
};

// Function to get all food names
export function getFoodNames(): string[] {
  return foodData.map((food: Food) => food.name);
}
