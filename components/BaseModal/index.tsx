import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  onClose?: () => void;
};

function CloseIcon() {
  // From lucide-icon
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function BaseModal({ children, title, onClose }: Props) {
  return (
    <div className="max-w-md w-full bg-white rounded-md border border-gray-100 p-4 relative">
      {onClose && (
        <button
          className="bg-transparent border-none text-lg text-gray-500 hover:bg-gray-100 absolute top-3 right-3 w-8 h-8 p-1 rounded-md"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      )}
      {title && (
        <h3 className="text-xl font-bold m-0 mx-4 text-center">{title}</h3>
      )}
      {children}
    </div>
  );
}
