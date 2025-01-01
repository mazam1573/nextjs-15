import Navbar from "@/components/navigation/nvabar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
};

export default RootLayout;
