import { createContext, FC, useState } from "react";

interface MobileMenuProviderProps {
  children: React.ReactNode;
}

type MobileMenuContextType = {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuContextType>(
  {} as MobileMenuContextType
);

export const MobileMenuProvider: FC<MobileMenuProviderProps> = ({
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <MobileMenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContext;
