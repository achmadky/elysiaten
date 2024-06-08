import foodData from '../public/data.json';

// Define types
type Food = {
  id: number;
  name: string;
  calories: number;
  cholesterol: number;
};

// Function to find food by name
export function findFoodByName(name: string): Food | undefined {
  const lowerCaseName = name.toLowerCase();
  return foodData.find((item) => item.name.toLowerCase() === lowerCaseName);
}
