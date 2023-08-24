import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler;
  btnType?: "button" | "submit";
}
export interface searchManufacturersProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
