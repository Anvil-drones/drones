import { IconProps } from "@/types/iconProps";

export const IconBullet = ({ className }: IconProps) => {
  return (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="bullet icon"
    >
      <g clipPath="url(#clip0_1033_1276)">
        <path
          d="M0 4.93945L6.09601 8.45945L0 11.9795V4.93945Z"
          stroke="#13D12F"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1033_1276">
          <rect width="11" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
