type Props = {
  margin?: number;
};

export default function Divider({ margin = 0 }: Props) {
  return (
    <div
      className="h-px bg-white box-border"
      style={{ marginLeft: margin, marginRight: margin }}
    ></div>
  );
}
