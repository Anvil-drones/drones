export const ListStyleTypeFourSquare = ({ index }: { index?: number }) => {
  return (
    <div className="relative h-[10px] w-[10px]">
      <div className="absolute left-0 top-0 h-1 w-1 bg-accent"></div>
      <div
        className={`absolute right-0 top-0 h-1 w-1 ${index && index >= 2 ? "bg-accent" : "border border-accent"} `}
      ></div>
      <div
        className={`absolute bottom-0 left-0 h-1 w-1 ${index && index >= 3 ? "bg-accent" : "border border-accent"}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 h-1 w-1 ${index && index >= 4 ? "bg-accent" : "border border-accent"}`}
      ></div>
    </div>
  );
};
