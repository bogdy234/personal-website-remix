import { FC, ReactElement } from "react";

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = (): ReactElement => {
  return (
    <div className="h-screen">
      <div>About</div>
    </div>
  );
};

export default MobileMenu;
