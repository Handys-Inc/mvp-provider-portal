import React from "react";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";

function Layout({
  showHeader = true,
  children,
  current,
  showBottomNav = true,
}) {
  // Current is used to render out the active navbar icon

  return (
    <div className="h-screen w-full overflow-y-auto">
      {showHeader ? <Header /> : null}
      <div className="px-5 md:px-5">{children}</div>
      <BottomNav current={current} showBottomNav={showBottomNav} />
    </div>
  );
}

export default Layout;
