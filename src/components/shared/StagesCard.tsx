import { ThreeSquares } from "./ThreeSquares";

export const StagesCard = ({
  title,
  description,
  index,
  className,
}: {
  title: string;
  description: string;
  index: number;
  className?: string;
}) => {
  return (
    <div
      className={`${className} relative h-[165px] w-[288px] bg-[url('/bg/rectangle2.svg')] bg-cover bg-center bg-no-repeat p-4 tab:h-[170px] tab:w-[350px] pc:h-[210px] pc:w-[394px] pc:p-8`}
    >
      <div
        className={`mb-4 flex items-center gap-4 pc:justify-between ${index === 2 ? "pc:gap-[161px]" : "pc:gap-[125px]"} `}
      >
        <span className="flex h-6 w-6 items-center justify-center font-exo font-semibold uppercase">
          0{index + 1}
        </span>
        <div className="flex items-center gap-2">
          <div>
            <ThreeSquares />
          </div>
          <h4 className="font-exo font-semibold uppercase text-title pc:text-lg">
            {title}
          </h4>
        </div>
      </div>
      <p className="text-base tab:text-base13">{description}</p>
    </div>
  );
};
