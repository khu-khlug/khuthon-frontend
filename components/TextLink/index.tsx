import classNames from "classnames";

type Props = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function TextLink({ href, children, className }: Props) {
  return (
    <a
      href={href}
      className={classNames(
        "text-black hover:text-black/70 underline underline-offset-2 cursor-pointer border-0 bg-none bg-transparent p-0",
        className
      )}
    >
      {children}
    </a>
  );
}
