import { MENU_ITEMS } from "@/common/constant/menu";

import Menu from "@/common/components/layouts/sidebar/Menu";
import Profile from "@/common/components/layouts/sidebar/Profile";
import BreakLine from "@/common/components/elements/BreakLine";
import Copyright from "@/common/components/elements/Copyright";

export default function Sidebar() {
  const filteredMenu = MENU_ITEMS.filter((item) => item?.isShow);

  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <Profile />
      <nav className="hidden md:block">
        <BreakLine />
        <div className="hidden lg:block">
          <Menu list={filteredMenu} />
        </div>
        <BreakLine />
        <Copyright />
      </nav>
    </div>
  );
}
