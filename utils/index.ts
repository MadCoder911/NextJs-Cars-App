const axios = require("axios");
const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "corolla" },
  headers: {
    "X-RapidAPI-Key": "508eadbe56mshca32ef31e17ea0ep1ad14ejsnf087e072c400",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchCars = async () => {
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: { model: "corolla" },
    headers: {
      "X-RapidAPI-Key": "508eadbe56mshca32ef31e17ea0ep1ad14ejsnf087e072c400",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
};
