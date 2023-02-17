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
    <div className="h-screen min-w-full">
      {/* Header: h-[7vh] md:h-[12vh] */}
      {showHeader ? <Header /> : null}

      {/* Children: 83vh */}
      <div className="px-2 md:px-5 min-w-full overflow-y-auto h-[83vh] md:h-[88vh]">
        {children}
      </div>

      {/* bottom nav: h-[10vh] */}
      <BottomNav current={current} showBottomNav={showBottomNav} />
    </div>
  );
}

export default Layout;
