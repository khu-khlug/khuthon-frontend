import classNames from "classnames";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames("container", { [`${className}`]: !!className })}>
      {children}
    </div>
  );
}
