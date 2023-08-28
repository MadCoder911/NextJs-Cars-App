import { CarProps } from "@/types";

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
    params: { model: "carrera" },
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
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
