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

  console.log("inner height!!!!!", window.innerHeight);

  return (
    <div className={`h-[${window.innerHeight}px] min-w-full overflow-y-auto`}>
      {/* Header: h-[7vh] md:h-[12vh] */}
      {showHeader ? <Header /> : null}

      {/* Children: 83vh  */}
      <div className="px-3 md:px-5 bg-red-400 min-w-full overflow-y-auto h-[70%]">
        {children}
      </div>

      {/* bottom nav: h-[10vh] */}
      <BottomNav current={current} showBottomNav={showBottomNav} />
    </div>
  );
}

export default Layout;
