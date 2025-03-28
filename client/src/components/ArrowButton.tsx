import { GoArrowUpRight } from "react-icons/go";
import clsx from "clsx";

type ArrowButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  text,
  onClick,
  className,
  iconClassName,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "mt-[26px] md:mt-[15px] lg:mt-[15px] xl:mt-[4px]",
        "w-[38px] sm:w-[58px] md:w-[78px] md:h-[30px] lg:w-[105px] xl:w-[135px] h-[20px]",
        "lg:m-1 flex bg-[#1f1f1f] rounded-sm lg:rounded-sm items-center justify-center",
        "lg:h-12 text-[3px] sm:text-[6px] lg:text-[1vw] capitalize px-[0px] lg:px-[4px] py-[2px] lg:py-1",
        "custom-border border-1 ",
        className
      )}
    >
      {text}{" "}
      <GoArrowUpRight
        className={clsx("text-[6px] sm:text-[8px] lg:text-xl", iconClassName)}
      />
    </button>
  );
};

export default ArrowButton;
