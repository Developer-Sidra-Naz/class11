// src/components/CarCard.tsx

import React from "react";

interface CarCardProps {
  carImage: string;
  carName: string;
  carPrice: number;
  carReviews: string;
}

const CarCard: React.FC<CarCardProps> = ({
  carImage,
  carName,
  carPrice,
  carReviews,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full sm:w-5/12 md:w-3/12 lg:w-2/12 p-4 text-center">
      {/* Image */}
      <img
        src={carImage}
        alt={carName}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      {/* Car Details */}
      <h1 className="text-lg font-semibold text-gray-700">{carName}</h1>
      <p className="text-gray-500 text-sm">Price: ${carPrice}</p>
      <p className="text-gray-400 text-sm">Reviews: {carReviews}</p>
    </div>
  );
};

export default CarCard;
