"use client";
import { CustomButtonProps } from "@/types";
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`custom-btn ${containerStyles}`}>{title}</span>
    </button>
  );
};
export default CustomButton;
