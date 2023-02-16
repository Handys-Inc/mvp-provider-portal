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
    <div className="h-screen min-w-full overflow-y-auto pb-28">
      {showHeader ? <Header /> : null}
      <div className="px-2 md:px-5 min-w-full">{children}</div>
      <BottomNav current={current} showBottomNav={showBottomNav} />
    </div>
  );
}

export default Layout;
