import classNames from "classnames";

type Props = {
  current: number;
  maxPage: number;
  onSelect: (page: number) => void;
};

export default function Pager({ current, maxPage, onSelect }: Props) {
  const handleClick = (page: number) => {
    if (page === current) return;
    onSelect(page);
  };

  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: maxPage }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={classNames(
            "text-black",
            "bg-transparent",
            "border-none",
            "text-lg",
            "w-8",
            "h-8",
            "hover:bg-gray-100",
            "hover:rounded-md",
            {
              "font-bold": page === current,
              "bg-gray-100": page === current,
              "rounded-md": page === current,
            }
          )}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
