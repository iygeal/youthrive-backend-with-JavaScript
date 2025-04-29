// import express from 'express' for server setup

const express = require('express');

// Create an instance of express
const app = express();

// Create an environment variable for port
const port = process.env.PORT || 5000;

// Start the server and listen for requests on the specified port
app.listen(port, () => {
  console.log(`Server started running on ${port}`);
});

// Use express.json() as middleware to handle incoming POST requests
app.use(express.json());

// Use the array as a global variable for all assignments

const drugs = [
  {
    id: 1,
    name: 'Amoxicillin',
    category: 'Antibiotic',
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: 'Pfizer',
  },

  {
    id: 2,
    name: 'Paracetamol',
    category: 'Analgesic',
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: 'GSK',
  },

  {
    id: 3,
    name: 'Ibuprofen',
    category: 'Analgesic',
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: 'Bayer',
  },

  {
    id: 4,
    name: 'Chloroquine',
    category: 'Antimalarial',
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: 'Sanofi',
  },

  {
    id: 5,
    name: 'Ciprofloxacin',
    category: 'Antibiotic',
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: 'Pfizer',
  },

  {
    id: 6,
    name: 'Loratadine',
    category: 'Antihistamine',
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: 'Novartis',
  },

  {
    id: 7,
    name: 'Metformin',
    category: 'Antidiabetic',
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: 'Teva',
  },

  {
    id: 8,
    name: 'Artemether',
    category: 'Antimalarial',
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: 'Roche',
  },

  {
    id: 9,
    name: 'Aspirin',
    category: 'Analgesic',
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: 'Bayer',
  },

  {
    id: 10,
    name: 'Omeprazole',
    category: 'Antacid',
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: 'AstraZeneca',
  },

  {
    id: 11,
    name: 'Azithromycin',
    category: 'Antibiotic',
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: 'Pfizer',
  },

  {
    id: 12,
    name: 'Cetirizine',
    category: 'Antihistamine',
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: 'Novartis',
  },

  {
    id: 13,
    name: 'Insulin',
    category: 'Antidiabetic',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: 'Novo Nordisk',
  },

  {
    id: 14,
    name: 'Artemisinin',
    category: 'Antimalarial',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: 'GSK',
  },

  {
    id: 15,
    name: 'Codeine',
    category: 'Analgesic',
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: 'Teva',
  },

  {
    id: 16,
    name: 'Vitamin C',
    category: 'Supplement',
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: 'Nature’s Bounty',
  },

  {
    id: 17,
    name: 'Ranitidine',
    category: 'Antacid',
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: 'Sanofi',
  },

  {
    id: 18,
    name: 'Doxycycline',
    category: 'Antibiotic',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: 'Pfizer',
  },

  {
    id: 19,
    name: 'Tramadol',
    category: 'Analgesic',
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: 'Teva',
  },

  {
    id: 20,
    name: 'Folic Acid',
    category: 'Supplement',
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: 'Nature’s Bounty',
  },
];

// 1. API route to get all drugs which are antibiotics,
// map to return only the names for cleaner output
app.get('/drugs/antibiotics', (request, response) => {
  const antibiotics = drugs
    .filter((each) => each.category === 'Antibiotic')
    .map((each) => each.name);

  response.json(antibiotics);
});

// 2. Return an array of all drug names converted to lowercase
app.get('/drugs/names', (request, response) => {
  const drugNames = drugs.map((each) => each.name.toLowerCase());

  // Send the response to the client
  response.json(drugNames);
});

// 3. POST /drugs/by-category: accept a category in the body
// and return all drugs under that category
app.post('/drugs/by-category', (request, response) => {
  // Access the category from the request body
  const { category } = request.body;

  // Filter the drugs based on the requested category
  const drugsByCategory = drugs
    .filter((each) => each.category === category)

    // Map to return only the names for cleaner output
    .map((each) => each.name);

  response.json(drugsByCategory);
});

// 4. GET /drugs/names-manufacturers: return an array of all drug names and manufacturers
app.get('/drugs/names-manufacturers', (request, response) => {
  const namesAndManufacturers = drugs.map((each) => {
    return {
      name: each.name,
      manufacturer: each.manufacturer,
    };
  });
  response.json(namesAndManufacturers);
});

// 5. GET /drugs/prescription
// Get all drugs where isPrescription is true

app.get('/drugs/prescription', (request, response) => {
  const prescriptionDrugs = drugs
    .filter((each) => each.isPrescriptionOnly === true)
    .map((each) => each.name);

  response.json(prescriptionDrugs);
});

// 6. GET /drugs/formatted: Return a new array where each item is a string
// like "Drug: [name] - [dosageMg]mg"

app.get('/drugs/formatted', (request, response) => {
  const formattedDrugs = drugs.map(
    (each) => `Drug: [${each.name}] - [${each.dosageMg}]mg`
  );

  response.json(formattedDrugs);
});

// 7.GET /drugs/low-stock
// Return all drugs where stock is less than 50.

app.get('/drugs/low-stock', (request, response) => {
  const lowStockDrugs = drugs
    .filter((each) => each.stock < 50)
    .map((each) => each.name);
  response.json(lowStockDrugs);
});

// 8. GET /drugs/non-prescription
// Return all drugs where isPrescription is false
app.get('/drugs/non-prescription', (request, response) => {
  const nonPrescriptionDrugs = drugs
    .filter((each) => each.isPrescriptionOnly === false)
    .map((each) => each.name);
  response.json(nonPrescriptionDrugs);
});

// 9.POST /drugs/manufacturer-count
// Accept a manufacturer in the body and
// return how many drugs are produced by that manufacturer.

app.post('/drugs/manufacturer-count', (request, response) => {
  const { manufacturer } = request.body;
  const count = drugs.filter(
    (each) => each.manufacturer === manufacturer
  ).length;
  response.json(count);
});

// 10. GET /drugs/count-analgesics
// Count and return how many drugs have the category "Analgesic".

app.get('/drugs/count-analgesics', (request, response) => {
  const count = drugs.filter((each) => each.category === 'Analgesic').length;
  response.json(count);
});
