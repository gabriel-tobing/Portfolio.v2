import styled from "@emotion/styled";
import clsx from "clsx";

interface MobileMenuButtonProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
}

export default function MobileMenuButton({ expandMenu, setExpandMenu }: MobileMenuButtonProps) {
  const handleMenuToggle = () => {
    setExpandMenu(!expandMenu);
  };

  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  return (
    <StyledMenu className="flex lg:hidden" onClick={handleMenuToggle}>
      {menuSpanData.map((item) => (
        <StyledMenuSpan
          className={clsx("bg-neutral-950 dark:bg-neutral-100 ", expandMenu && "active")}
          key={item.index}
        />
      ))}
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 21px;
  width: 26px;
  cursor: pointer;
`;

const StyledMenuSpan = styled.span`
  width: 100%;
  height: 3px;
  transition: all 0.5s ease;
  border-radius: 10px;

  &.active:nth-of-type(1),
  &.active:nth-of-type(3) {
    transform-origin: left;
  }
  &.active:nth-of-type(1) {
    transform: rotate(45deg);
  }
  &.active:nth-of-type(2) {
    width: 0;
  }
  &.active:nth-of-type(3) {
    transform: rotate(-45deg);
  }
`;
