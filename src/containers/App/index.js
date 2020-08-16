import './app.css';
import React, { useState, useEffect } from 'react';
import Board from '../../components/Board';
import Menu from '../../components/Menu';

import { menus } from '../../constants/menu';


function App(props) {
    const [tool, setTool] = useState({ ...menus[0], subMenu: menus[0].subMenus[0].name });
    const [dimension, setDimension] = useState({ width: 500, height: 500})

    const selectTool = (menu) => setTool({ 
        ...menu, 
        subMenu: menu.subMenus && menu.subMenus[0] && menu.subMenus[0].name 
    });

    const modifyTool = (options) => {
        setTool({
            ...tool, 
            ...options, 
            name: tool.name, 
            subMenu: options.name 
        });
    };

    const setBoardDimension = () => {
        setDimension({
            width: window.innerWidth - 80,
            height: window.innerHeight - 50
        });
    };

    useEffect(() => {
        window.addEventListener('resize', () => setBoardDimension());
        setBoardDimension();
    }, []);

    return (
        <main className="white-board">
            <Menu
                menus={menus}
                tool={tool}
                selectTool={selectTool}
                modifyTool={modifyTool} />
            <Board
                width={dimension.width}
                height={dimension.height}
                strokeStyle={tool.value}
                lineWidth={tool.lineWidth}
                operation={tool.type} />
        </main>
    )
}

export default App;