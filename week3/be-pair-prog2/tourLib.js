// {
//     "name": "Best of Paris in 7 Days Tour",
//     "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
//     "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
//     "price": "1,995"
//   }


let tourArray = [];
let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(name, info, image, price) {
  if (!name || !info || !image || !price) {
    return false;
  }

  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price: Number(price.replace(/,/g, '')) // Ensures price is a number, removing any commas
  };

  tourArray.push(newTour);
  return newTour;
}

function findById(id) {
  const numericId = Number(id);
  const tour = tourArray.find(item => item.id === numericId);
  return tour || false;
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    // Update properties only if provided in updatedData
    if (updatedData.name) tour.name = updatedData.name;
    if (updatedData.info) tour.info = updatedData.info;
    if (updatedData.image) tour.image = updatedData.image;
    if (updatedData.price) tour.price = Number(updatedData.price.replace(/,/g, ''));
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const initialLength = tourArray.length;
  tourArray = tourArray.filter(tour => tour.id !== Number(id));
  return tourArray.length < initialLength;
}

// Testing block: only runs if this file is run directly
if (require.main === module) {
  // Add a sample tour and display results
  console.log("Adding a tour:");
  let result = addOne("7 Days Tour", "Join us for the Best of Helsinki!", "https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
  console.log(result);

  // Get all tours
  console.log("getAll called:", getAll());

  // Find tour by ID
  console.log("findById called for ID 1:", findById(1));

  // Update tour by ID
  console.log("Updating tour with ID 1:");
  result = updateOneById(1, { name: "Updated 7 Days Tour", price: "1,800" });
  console.log(result);

  // Delete tour by ID
  console.log("Deleting tour with ID 1:");
  const isDeleted = deleteOneById(1);
  console.log("Deleted:", isDeleted);
  console.log("Tours after deletion:", getAll());
}

// Exporting functions for use in other files
const Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById
};

module.exports = Tour;
