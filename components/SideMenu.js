import React, { useEffect, useState } from "react";
import logo from "../assets/Logo/logo.jpg";
import user from "../assets/user.jpg";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Category",
    exact: true,
    to: `/category`,
    iconClassName: "bi bi-tags",
    subMenus: [
      { name: "Web Design", to: "/category/webdesign" },
      { name: "Login From", to: "/category/loginform" },
      { name: "Card Design", to: "/category/carddesign" },
    ],
  },
  { name: "Posts", to: `/posts`, iconClassName: "bi bi-file-post" },
  {
    name: "Chart",
    exact: true,
    to: `/chart`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Pie", to: "/chart/pie" },
      { name: "Line", to: "/chart/Line" },
      { name: "Bar", to: "/chart/Bar" },
    ],
  },
  { name: "Products", to: `/products-2`, iconClassName: "bi bi-usb-drive" },
  { name: "Design ", to: `/design`, iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }
    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, [inactive]);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div onClick={() => setInactive(!inactive)} className="logo">
          <img src={logo} alt="log.jpg" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

           {/*<li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
                
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
                
              </div>
              <span>Category</span>
            </a>
            <ul className="subMenus">
              <li>
              <a> Web Design</a>
              </li>
              <li>
                <a>Login Form </a>
              </li>
              </ul>
          </li>
          
         <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> 
*/}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>John</h5>
          <p>Web Designer</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
