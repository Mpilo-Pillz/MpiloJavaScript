const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

const cat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable",
};

const random = [..."pets", { ...cat, ...dog }];
