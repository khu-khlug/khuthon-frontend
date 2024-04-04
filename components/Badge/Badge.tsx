import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: Props) {
  return (
    <span
      className={classNames(
        className,
        "badge",
        "Background__Main-Color text-white rounded-sm px-2 py-0.5"
      )}
    >
      {children}
    </span>
  );
}
