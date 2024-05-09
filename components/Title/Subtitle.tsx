import classNames from "classnames";

import "./Subtitle.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Subtitle({ children, className }: Props) {
  return (
    <h3 className={classNames("subtitle relative Text__Main-Color", className)}>
      {children}
    </h3>
  );
}
