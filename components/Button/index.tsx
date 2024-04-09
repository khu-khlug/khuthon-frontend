type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: Props) {
  return (
    <button
      className="border-none bg-gray-700 hover:bg-gray-500 transition-colors text-white text-base px-3 py-1.5 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
