/** @format */

import React from "react";

const container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1200px]    mx-auto   xl:px-90   md:px-20 sm:px-5">
      {children}
    </div>
  );
};

export default container;
