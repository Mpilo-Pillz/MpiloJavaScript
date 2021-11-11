const banks = [
    {
      key: 1,
      label: "JavaScript",
    },
    {
      key: 2,
      label: "TypeScript",
    },
    {
      key: 3,
      label: "Python",
    },
    {
      key: 4,
      label: "Swift",
    },
    {
      key: 5,
      label: "Dart",
    },
    {
      key: 6,
      label: "Java",
    },
    {
      key: 7,
      label: "C#",
    },
    {
      key: 8,
      label: "HTML",
    },
    {
      key: 9,
      label: "CSS",
    },
    {
      key: 10,
      label: "Swift",
    },
    
  ];

 
function pillz(key) {
    return banks.find(bank => bank.key === key).label
}

function fika(key) {
  return banks.filter(bank => bank.key === key).label
}

console.log(pillz(1))
console.log(pillz(10))
console.log(fika(10))
console.log(fika(10))