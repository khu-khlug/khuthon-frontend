import classNames from "classnames";

type Props = {
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function TextButton({
  onClick,
  loading,
  className,
  children,
}: Props) {
  const handleClick = () => {
    if (loading || !onClick) return;
    onClick();
  };

  return (
    <button
      type="button"
      className={classNames(
        "text-black hover:text-black/70 underline underline-offset-2 cursor-pointer border-0 bg-none bg-transparent p-0",
        { "cursor-wait": loading },
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
