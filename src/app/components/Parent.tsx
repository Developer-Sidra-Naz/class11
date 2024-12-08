// src/app/parent/page.tsx

import React from "react";
import CarCard from "./child";

const ArrayMapParent = () => {
  const cars = [
    {
      carImage: "/car1.png",
      carName: "Car 1",
      carPrice: 25000,
      carReviews: "Excellent",
    },
    {
      carImage: "/car2.png",
      carName: "Car 2",
      carPrice: 30000,
      carReviews: "Good",
    },
    {
      carImage: "/car3.png",
      carName: "Car 3",
      carPrice: 20000,
      carReviews: "Very Good",
    },
    {
      carImage: "/car4.png",
      carName: "Car 4",
      carPrice: 40000,
      carReviews: "Outstanding",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {cars.map((car, index) => (
        <CarCard
          key={index}
          carImage={car.carImage}
          carName={car.carName}
          carPrice={car.carPrice}
          carReviews={car.carReviews}
        />
      ))}
    </div>
  );
};

export default ArrayMapParent;
