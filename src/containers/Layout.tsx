import React from "react";
import { AppHead } from "../components";
import Nav from "./Nav";

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <AppHead />
      <Nav />
      <div id="content">{children}</div>
    </div>
  );
}

export default Layout;
