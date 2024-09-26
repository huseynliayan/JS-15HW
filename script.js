const carsArr = [
  { brand: "Ford", model: "Mustang", year: 2022, used: false },
  { brand: "Ford", model: "F-150", year: 2023, used: true },
  { brand: "BMW", model: "X5", year: 2022, used: false },
  { brand: "BMW", model: "3 Series", year: 2023, used: true },
  { brand: "Mazda", model: "CX-5", year: 2022, used: false },
  { brand: "Mazda", model: "Mazda3", year: 2023, used: true },
  { brand: "Toyota", model: "Camry", year: 2022, used: false },
  { brand: "Toyota", model: "RAV4", year: 2023, used: true },
];

let cars = document.getElementById("cars");
let brand;
let year;
let used;

const filterCars = () => {
  let filteredCars = carsArr.filter(
    (item) =>
      item.brand === brand &&
      item.year == year &&
      item.used === (used === "true")
  );
  console.log(filteredCars);
  cars.innerHTML = "";
  filteredCars.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = `${item.brand} - ${item.model} - ${item.year}`;
    cars.appendChild(li);
  });
};

document.querySelectorAll("#carList span").forEach((element) => {
  element.addEventListener("click", (ev) => {
    brand = ev.target.innerText;
    filterCars();
  });
});
document.querySelectorAll("#carsYear span").forEach((element) => {
  element.addEventListener("click", (ev) => {
    year = ev.target.innerText;
    filterCars();
  });
});

document.querySelectorAll("#usedOrNot span").forEach((element) => {
  element.addEventListener("click", (ev) => {
    used = ev.target.innerText === "Yes" ? "true" : "false";
    filterCars();
  });
});

//   document.querySelectorAll("select").forEach((item) =>
//     item.addEventListener("click", (ev) => {
//       document.querySelectorAll("select").forEach((item) => {
//         item.style.backgroundColor = "transparent";
//       });
//       ev.target.style.backgroundColor = "red";
//     })
//   );
