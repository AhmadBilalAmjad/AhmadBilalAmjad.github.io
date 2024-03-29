import React from "react";
import { useHistory } from "react-router-dom";
import { Menu, Layout } from "antd";

const Header = () => {
  const { Item } = Menu;
  const { Header } = Layout;
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const activeLink = pathname === "/" ? "home" : "projects";

  return (
    <Header className="header">
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[activeLink]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Item key="home" onClick={() => history.push("/")}>
          Home
        </Item>
        {/* <Item key="projects" onClick={() => history.push("/projects")}>
          Projects
        </Item> */}
      </Menu>
    </Header>
  );
};

export default Header;
