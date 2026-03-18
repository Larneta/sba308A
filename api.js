const BASE_URL = "https://dog.ceo/api";

// GET random dog
export async function fetchRandomDog() {
  const response = await fetch(`${BASE_URL}/breeds/image/random`);
  const data = await response.json();
  return data.message;
}

// GET dogs by breed
export async function fetchDogsByBreed(breed) {
  const response = await fetch(`${BASE_URL}/breed/${breed}/images`);
  const data = await response.json();
  return data.message;
}