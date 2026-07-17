export const FourSquaresRow = ({ index }: { index?: number }) => {
  return (
    <div className="flex gap-[6px]">
      <div className="h-2 w-2 bg-title pc:h-[10px] pc:w-[10px]" />
      <div
        className={`h-2 w-2 pc:h-[10px] pc:w-[10px] ${index && index >= 2 ? "bg-title" : "bg-black30"}`}
      />
      <div
        className={`h-2 w-2 pc:h-[10px] pc:w-[10px] ${index && index >= 3 ? "bg-title" : "bg-black30"}`}
      />
      <div
        className={`h-2 w-2 pc:h-[10px] pc:w-[10px] ${index && index >= 4 ? "bg-title" : "bg-black30"}`}
      />
    </div>
  );
};
