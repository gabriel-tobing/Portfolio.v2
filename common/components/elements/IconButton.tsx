interface IconButtonProps {
  id?: string;
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function IconButton({ id = "icon-button", icon, onClick }: IconButtonProps) {
  return (
    <button
      type="reset"
      className="self-end m-1 p-1 rounded-md dark:hover:bg-neutral-900 hover:bg-neutral-100"
      id={id}
      aria-label="icon-button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
