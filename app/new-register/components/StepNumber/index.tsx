import classNames from "classnames";

type Props = {
  step: number;
  disabled?: boolean;
};

export default function StepNumber({ step, disabled }: Props) {
  return (
    <span
      aria-disabled={disabled}
      className={classNames(
        "p-3 rounded-full w-4 h-4 text-center inline-block text-lg font-semibold leading-none",
        "Background__Main-Color text-white",
        "aria-disabled:bg-gray-300 aria-disabled:text-gray-500"
      )}
    >
      {step}
    </span>
  );
}
