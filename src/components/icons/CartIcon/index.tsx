import { IconProps } from "../../../@types/appPropTypes";

export const CartIcon = ({
  className = "",
  width = 40,
  height = 40,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.09 9.9a1.79 1.79 0 0 0 1.575-.927l3.22-5.841a.897.897 0 0 0-.782-1.332H3.788L2.942 0H0v1.8h1.8l3.238 6.831-1.214 2.196c-.657 1.206.206 2.673 1.574 2.673h10.796v-1.8H5.398l.99-1.8h6.702ZM4.642 3.6h10.931L13.09 8.1H6.774L4.642 3.6Zm.756 10.8c-.99 0-1.79.81-1.79 1.8s.8 1.8 1.79 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8Zm8.997 0c-.99 0-1.79.81-1.79 1.8s.8 1.8 1.79 1.8 1.799-.81 1.799-1.8-.81-1.8-1.8-1.8Z"
      />
    </svg>
  );
};
