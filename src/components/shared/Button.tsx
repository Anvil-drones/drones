export const Button = ({
  text,
  disabled,
  joinUs,
  onClick,
}: {
  text: string;
  submit?: boolean;
  disabled?: boolean;
  joinUs?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className="group relative h-12 w-[288px] bg-blackCustom tab:h-[56px]">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${disabled ? "cursor-none" : "cursor-pointer group-hover:bg-radial-green-100 group-hover:text-hoverAccent"} ${joinUs ? "border border-title20 bg-title20 text-title group-hover:border-accent/20" : "border border-accent/20 bg-radial-green-50 text-accent"} h-12 w-[288px] text-base font-bold uppercase transition-all duration-300 ease-in-out tab:h-[56px]`}
      >
        {text}
      </button>
      <div
        className={`h-3 w-3 border-l-[2px] border-t-[2px] ${joinUs ? "border-title transition-all duration-300 ease-in-out group-hover:border-accent" : "border-accent"} absolute left-0 top-0`}
      ></div>
      <div
        className={`h-3 w-3 border-r-[2px] border-t-[2px] ${joinUs ? "border-title transition-all duration-300 ease-in-out group-hover:border-accent" : "border-accent"} absolute right-0 top-0`}
      ></div>
      <div
        className={`h-3 w-3 border-b-[2px] border-r-[2px] ${joinUs ? "border-title transition-all duration-300 ease-in-out group-hover:border-accent" : "border-accent"} absolute bottom-0 right-0`}
      ></div>
      <div
        className={`h-3 w-3 border-b-[2px] border-l-[2px] ${joinUs ? "border-title transition-all duration-300 ease-in-out group-hover:border-accent" : "border-accent"} absolute bottom-0 left-0`}
      ></div>
    </div>
  );
};
