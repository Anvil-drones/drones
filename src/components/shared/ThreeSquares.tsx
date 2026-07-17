export const ThreeSquares = () => {
  return (
    <div className="relative h-[10px] w-[10px]">
      <div className="absolute left-0 top-0 h-1 w-1 bg-accent" />
      <div className="absolute right-0 top-0 h-1 w-1 bg-accent" />
      <div className="absolute bottom-0 left-0 h-1 w-1 bg-accent" />
    </div>
  );
};
