import React from "react";
import LeftHead from "./sub-header/LeftHead";
import CenterHead from "./sub-header/CenterHead";
import RightHead from "./sub-header/RightHead";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <LeftHead className="left" />
        <CenterHead className="center" />
        <RightHead className="right" />
      </div>
    );
  }
}

export default Header;
