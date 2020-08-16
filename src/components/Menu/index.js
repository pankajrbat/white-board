import React from 'react';
import './menu.css';

function Menu(props) {
    return (
        <section className="menu">
            <div className="menu-container">
                {props.menus.map(menu => {
                    return (<div key={menu.name}>
                        <button
                            onClick={() => props.selectTool(menu)}
                            className={props.tool.name === menu.name ? 'active' : ''}>
                            <img
                                alt="Draw Tool"
                                src={`./public/${menu.name}.svg`}
                                draggable="false" />
                        </button>
                    </div>);
                })}
            </div>
            {props.tool.subMenus && <div className="submenu-container">
                {props.tool.subMenus.map(subMenu => {
                    const isActive = props.tool.subMenu === subMenu.name;
                    const style = isActive && subMenu.color ? { filter: 'none' } : {};
                    return (<div key={subMenu.name}>
                        <button
                            onClick={() => {
                                const options = { ...subMenu };
                                props.modifyTool({ ...options })
                            }}
                            className={isActive ? 'active' : ''}>
                            <img
                                style={style}   
                                alt="Draw Tool"
                                src={`./public/${subMenu.name}.svg`}
                                draggable="false" />
                        </button>
                    </div>);
                })}
            </div>}
        </section>
    )
}

export default Menu;