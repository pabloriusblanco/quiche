// typescript tsx component

import React from "react";

type NavLinksContainer = {
  children: React.ReactNode;
};

const NavLinksContainer = ({ children }: NavLinksContainer) => {
  return (
    <div className="flex items-center justify-end gap-6">{children}</div>
  );
};

export default NavLinksContainer;
