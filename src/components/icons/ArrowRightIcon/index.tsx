import { IconProps } from "../../../@types/appPropTypes";

export const ArrowRightIcon = ({ className = "", width = 40, height = 40 }: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.54 13.58h17.204l-7.516 7.713c-.6.617-.6 1.628 0 2.245.6.616 1.571.616 2.172 0l10.15-10.416c.6-.616.6-1.612 0-2.228L13.414.462a1.506 1.506 0 00-2.172 0c-.6.617-.6 1.612 0 2.229l7.501 7.728H1.54C.693 10.42 0 11.131 0 12c0 .87.693 1.58 1.54 1.58z"
      />
    </svg>
  );
};
