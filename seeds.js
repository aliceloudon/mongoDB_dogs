use dog_library
db.dropDatabase

db.dogs.insert([
  {
    name: "Belle",
    breed: "Cockapoo",
    size: "small"
  },
  {
    name: "Bonnie",
    breed: "Golden Retriever",
    size: "large"
  }
])