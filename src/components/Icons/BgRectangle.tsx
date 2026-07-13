import { IconProps } from "@/types/iconProps";

export const BgRectangle = ({ className }: IconProps) => {
  return (
    <svg
      width="225"
      height="110"
      viewBox="0 0 225 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="backgroung in rectangle form"
    >
      <path
        d="M224.5 0.5V78.9121L197.582 109.5H0.5V30.4727L27.4141 0.5H224.5Z"
        fill="#303030"
        fillOpacity="0.4"
        stroke="#303030"
      />
    </svg>
  );
};
