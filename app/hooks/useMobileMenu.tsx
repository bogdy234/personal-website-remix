import { useContext } from "react";
import MobileMenuContext from "~/context/MobileMenuProvider";

const useMobileMenu = () => useContext(MobileMenuContext);

export default useMobileMenu;
