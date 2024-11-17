import React, { useState } from "react";
import Header from "./Header";
import Mobile from "./Mobile";

const Responsive = () => {
  const [openMenu, setopenMenu] = useState(false);

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} openMenu={openMenu} />
      <Mobile openMenu={openMenu} />
    </>
  );
};

export default Responsive;
