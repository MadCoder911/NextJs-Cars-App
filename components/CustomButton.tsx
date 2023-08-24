"use client";
import { CustomButtonProps } from "@/types";
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1 ${containerStyles}`}>{title}</span>
    </button>
  );
};
export default CustomButton;
