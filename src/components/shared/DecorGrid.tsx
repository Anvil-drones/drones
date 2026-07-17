export const DecorGrid = ({ notFound }: { notFound?: boolean }) => {
  return (
    <>
      <div
        className={`absolute inset-x-0 top-0 ${notFound ? "bottom-0" : "bottom-[58px]"} pointer-events-none z-0 grid grid-cols-2 grid-rows-2`}
      >
        <div className="border-r border-title20" />
        <div />
        <div className="border-r border-t border-title20" />
        <div className="border-t border-title20" />
      </div>
      <div
        className={`absolute left-1/2 ${notFound ? "top-[50%]" : "top-[calc(50%-29px)]"} pointer-events-none grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 grid-cols-2 grid-rows-2`}
      >
        <div
          className={`border-r ${notFound ? "border-accent" : "border-title"} `}
        />
        <div />
        <div
          className={`border-r border-t ${notFound ? "border-accent" : "border-title"}`}
        />
        <div
          className={`border-t ${notFound ? "border-accent" : "border-title"}`}
        />
      </div>
      <div className="absolute left-4 top-9 h-4 w-4 border-l border-t border-title20 tab:left-5 tab:top-[56px] tab:h-5 tab:w-5 pc:left-[60px] pc:top-[60px] pc:h-9 pc:w-9" />
      <div className="absolute right-4 top-9 h-4 w-4 border-r border-t border-title20 tab:right-5 tab:top-[56px] tab:h-5 tab:w-5 pc:right-[60px] pc:top-[60px] pc:h-9 pc:w-9" />
      <div
        className={`absolute h-4 w-4 border-b border-l border-title20 tab:h-5 tab:w-5 pc:h-9 pc:w-9 ${notFound ? "bottom-7 tab:bottom-[45px]" : "bottom-[90px] tab:bottom-[110px]"} left-4 tab:left-5 pc:left-[60px]`}
      />
      <div
        className={`absolute h-4 w-4 border-b border-r border-title20 tab:h-5 tab:w-5 pc:h-9 pc:w-9 ${notFound ? "bottom-7 tab:bottom-[45px]" : "bottom-[90px] tab:bottom-[110px]"} right-4 tab:right-5 pc:right-[60px]`}
      />
    </>
  );
};
