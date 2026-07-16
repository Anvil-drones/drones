import { IconProps } from "@/types/iconProps";

export const IconOpen = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="plus icon"
    >
      <rect
        x="17.4062"
        y="10.8047"
        width="14.8204"
        height="1.66667"
        transform="rotate(179.756 17.4062 10.8047)"
        fill="#63D706"
      />
      <rect
        width="14.8204"
        height="1.66667"
        transform="matrix(-0.00426252 -0.999991 -0.999991 0.00426252 10.8555 17.4023)"
        fill="#63D706"
      />
    </svg>
  );
};
