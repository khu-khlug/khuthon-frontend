import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/50 z-50">
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto block"
        style={{ marginTop: "40vh" }}
      >
        <path
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          stroke="white"
          fill="white"
          strokeWidth="0.25"
          className="Spinner"
        />
      </svg>
    </div>
  );
}
