import { Elysia } from 'elysia';
import { findFoodByName } from './foodInfo';
import { getFoodNames } from './foodList';
import { cors } from '@elysiajs/cors';


// CORS options
const corsOptions = {
  origin: ['http://localhost:3001', 'https://eten-ui.vercel.app'],
};



// Initialize Elysia app
const app = new Elysia();

//CORS Middleware
app.use(cors(corsOptions));

// API endpoint to get food info by name
app.get('/api/food', async ({ query }) => {
  const name = query.name;

  if (typeof name !== 'string') {
    return {
      status: 400,
      body: { food: undefined }, // Bad request if name is not provided or not a string
    };
  }

  const food = findFoodByName(name);
  if (!food) {
    return {
      status: 404,
      body: { food: undefined }, // Not found if food not found
    };
  }

  return {
    status: 200,
    body: { food },
  };
});

// API endpoint to get all food names
app.get('/api/food/names', async () => {
  const foodNames = getFoodNames();
  return {
    status: 200,
    body: foodNames,
  };
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
