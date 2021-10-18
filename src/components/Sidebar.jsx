import React from "react";

const SidebarItem = ({ children }) => <div className="sidebar-item">{children}</div>

// TODO Q5
const Sidebar = (props) => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <SidebarItem>{props?.items.line_1}</SidebarItem>
    </div>
  );
};

export default Sidebar;
