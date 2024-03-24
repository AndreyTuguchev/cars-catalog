
const controller = new AbortController();
let fetchingData = false;

const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST as string;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY as string;

const headers = {
  'X-RapidAPI-Key': RAPIDAPI_KEY,
  'X-RapidAPI-Host': RAPIDAPI_HOST,
};


export async function fetchCars() {

  if (fetchingData) controller.abort();

  let result;

  try{
    fetchingData = true;
    const response = await fetch(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
      {
        signal: controller.signal,
        headers: headers,
      }
    );
    result = await response.json();
  }
  catch(error){
    console.log(`Error fetching cars data ${error}`)
  }
  finally{
    fetchingData = false;
  }
  

  if (result) return result;
}

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
