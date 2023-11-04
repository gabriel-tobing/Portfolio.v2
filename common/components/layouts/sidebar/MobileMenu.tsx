import { FC } from "react";
import { motion } from "framer-motion";

import { MENU_ITEMS } from "@/common/constant/menu";

import BreakLine from "@/common/components/elements/BreakLine";

import Menu from "@/common/components/layouts/sidebar/Menu";

const MobileMenu: FC = () => {
  const filteredMenu = MENU_ITEMS.filter((item) => item?.isShow);

  return (
    <motion.div
      className="h-screen flex flex-col my-3"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <BreakLine />
        <Menu list={filteredMenu} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
