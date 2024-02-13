import { MouseEventHandler } from "react";
import { Icons } from "./../Icons/Icons";
import Link from "next/link";

type ButtonProps = {
  title: string;
  icon?: keyof typeof Icons;
  className?: string;
  svgContainerClassName?: string;
  svgClassName?: string;
  navigateTo?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = (props) => {
  const SelectedIcon = props.icon
    ? Icons[props.icon]
    : Icons["ArrowRightBroken"];

  const buttonContent = (
    <>
      {props.title}
      {SelectedIcon && (
        <span
          className={`animate-pulse absolute right-0 pr-2 duration-500 ease-out group-hover:right-[76%] ${props.svgContainerClassName}`}
        >
          <SelectedIcon
            className={`ml-2 p-5 rounded-full ${props.svgClassName}`}
          />
        </span>
      )}
    </>
  );

  return (
    <>
      {props.navigateTo ? (
        <Link
          href={props.navigateTo}
          target={props.target || "_self"}
          rel={props.rel || "noreferrer"}
        >
          <button
            className={`rounded-full border relative inline-flex items-center justify-start py-3 pl-4 pr-14 overflow-hidden transition-all duration-300 ease-in-out  hover:pl-14 hover:pr-4 group ${props.className}`}
          >
            {buttonContent}
          </button>
        </Link>
      ) : (
        <button
          className={`rounded-full border relative inline-flex items-center justify-start py-3 pl-4 pr-14 overflow-hidden transition-all duration-300 ease-in-out  hover:pl-14 hover:pr-4 group ${props.className}`}
          type={props.type}
          onClick={props.onClick}
        >
          {buttonContent}
        </button>
      )}
    </>
  );
};

export default Button;