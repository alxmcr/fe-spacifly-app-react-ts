import { IconProps } from "../../../@types/appPropTypes";

export const ArrowLeftIcon = ({ className = "", width = 40, height = 40 }: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.46 10.42H5.256l7.516-7.713c.6-.617.6-1.628 0-2.245a1.506 1.506 0 00-2.172 0L.45 10.878c-.6.616-.6 1.612 0 2.228l10.135 10.432c.6.616 1.57.616 2.172 0 .6-.617.6-1.612 0-2.229L5.256 13.58H22.46c.847 0 1.54-.71 1.54-1.58 0-.87-.693-1.58-1.54-1.58z"
      />
    </svg>
  );
};
