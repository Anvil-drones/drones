import { ListStyleTypeFourSquare } from "./ListStyleTypeFourSquare";

export const ValueDiv = ({
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
      className={`${className} relative h-[124px] w-[288px] bg-[url('/bg/rectangle.png')] bg-[length:100%_100%] bg-center bg-no-repeat p-6 tab:h-[134px]`}
    >
      <h4 className="mb-3 font-exo font-semibold uppercase text-title tab:mb-[10px] tab:text-base pc:text-lg">
        {title}
      </h4>
      <p className="w-[230px] text-base tab:text-base13">{description}</p>
      <div className="absolute right-6 top-6">
        <ListStyleTypeFourSquare index={index} />
      </div>
    </div>
  );
};
