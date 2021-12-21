import { IconProps } from "../../../@types/appPropTypes";

export const MinusIcon =({ className = "", width = 40, height = 40 }: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2.4a9.6 9.6 0 100 19.2 9.6 9.6 0 000-19.2zm6 8.4a1.2 1.2 0 010 2.4H6a1.2 1.2 0 010-2.4h12z"
      />
    </svg>
  );
};
