"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { CustomButton } from ".";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  console.log(car);
  return <div>CarCard</div>;
};
export default CarCard;
