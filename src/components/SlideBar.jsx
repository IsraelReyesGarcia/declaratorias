import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { useState } from 'react';


const SlideBar = () => {
  const onChangeActive = () =>{
    setActive(!active);
    console.log(active);
  }

  const [active, setActive] = useState(false);
  return (
    <>
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar rtl>
            <Menu 

            rootStyles={{
              ['& > .' + menuClasses.button]: {
                backgroundColor:active ? '#0ea5e9' : undefined,
                color: active ? '#082f49' : '#fffff',
                '&.hover':{
                  backgroundColor: '#0ea5e9', 
                }
              },
            }}
            >
                <MenuItem active> Bajas temperaturas</MenuItem>
                <MenuItem className='hover:bg-cyan-600'> Ciclones</MenuItem>
                <MenuItem> Lluvias</MenuItem>
                <MenuItem active={active} onChange={()=>onChangeActive}>Inundaciones</MenuItem>
                <MenuItem>Deslaves</MenuItem>
                <MenuItem> Actividad volcánica</MenuItem> 
                <MenuItem> Deslave</MenuItem>
                <MenuItem> Deslizamiento</MenuItem>
                <MenuItem> Hundimiento</MenuItem>
                <MenuItem> Sismo</MenuItem>
            </Menu>
          </Sidebar>
        </div>
    </>
  )
}

export default SlideBar
