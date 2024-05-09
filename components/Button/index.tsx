import classNames from "classnames";
import { MouseEvent } from "react";

type Props = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  formSubmit?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({
  onClick,
  loading,
  formSubmit,
  className,
  children,
}: Props) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (loading || !onClick) return;
    onClick(e);
  };

  return (
    <button
      type={formSubmit ? "submit" : "button"}
      className={classNames(
        "border-none bg-gray-700 hover:bg-gray-500 transition-colors text-white text-base px-3 py-1.5 cursor-pointer",
        { "cursor-wait !bg-gray-400": loading },
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
