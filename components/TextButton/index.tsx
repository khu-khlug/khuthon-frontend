import classNames from "classnames";

type Props = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function TextButton({ onClick, className, children }: Props) {
  return (
    <button
      className={classNames(
        "text-black hover:text-black/70 underline underline-offset-2 cursor-pointer border-0 bg-none bg-transparent text-base p-0",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
