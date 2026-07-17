import { IconArrowAcordion } from "./Icons/IconArrowAcordion";
import { IconEmpty } from "./Icons/IconEmpty";

export const AccordionButton = ({ className }: { className?: string }) => {
  return (
    <div className="relative h-7 w-7 bg-transparent text-accent transition-all duration-300 ease-in-out hover:bg-radial-green-button tab:h-9 tab:w-9 pc:h-12 pc:w-12">
      <IconEmpty className="h-7 w-7 tab:h-9 tab:w-9 pc:h-12 pc:w-12" />
      <IconArrowAcordion
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      />
    </div>
  );
};
