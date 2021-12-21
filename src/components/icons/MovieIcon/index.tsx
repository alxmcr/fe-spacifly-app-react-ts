import { IconProps } from "../../../@types/appPropTypes";

export const MovieIcon = ({ className = "", width = 40, height = 40 }: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.19 2v2h-4V2c0-1.1-.9-2-2-2h-12c-1.1 0-2 .9-2 2v2h-4V2c0-1.1-.9-2-2-2s-2 .9-2 2v32c0 1.1.9 2 2 2s2-.9 2-2v-2h4v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h4v2c0 1.1.9 2 2 2s2-.9 2-2V2c0-1.1-.9-2-2-2s-2 .9-2 2zm-20 26h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4V8h4v4zm20 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4V8h4v4z"
      />
    </svg>
  );
};
