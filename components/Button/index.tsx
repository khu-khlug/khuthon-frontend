import classNames from "classnames";

type Props = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({ onClick, className, children }: Props) {
  return (
    <button
      className={classNames(
        "border-none bg-gray-700 hover:bg-gray-500 transition-colors text-white text-base px-3 py-1.5 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
