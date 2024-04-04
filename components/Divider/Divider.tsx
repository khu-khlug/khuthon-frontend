import classNames from "classnames";

type Props = {
  margin?: number;
  className?: string;
};

export default function Divider({ margin = 0, className }: Props) {
  return (
    <div
      className={classNames(className, "h-px bg-white box-border")}
      style={{ marginLeft: margin, marginRight: margin }}
    ></div>
  );
}
