type BreakLineProps = {
  className?: string;
  [propName: string]: string | undefined;
};

export default function BreakLine({ className = "", ...others }: BreakLineProps) {
  return (
    <div
      className={`border-t border-gray-300 dark:border-neutral-700 my-4 ${className}`}
      data-testid="breakline"
      {...others}
    ></div>
  );
}
