import React, {useState } from "react";
import { NavLink, Link } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, to,  } = props;
  const [ setExpand] = useState(false);
  return (
    <li onClick={props.onClick}>
      <Link exact to={to} onClick={() => {
        setExpand((e) => !e);
        }}
        className={`menu-item`}>
          <div className="menu-icon">
              <i class={iconClassName}></i>
          </div>
            <span>{name}</span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;