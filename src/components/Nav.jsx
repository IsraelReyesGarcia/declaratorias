import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className='bg-white px-3 text-black-200 flex items-center justify-between'>
        <div className='group -m-1.5 p-1.5 hover:cursor-pointer'>
            <h1 className='text-xl text-gray-700 font-bold'>Desastres naturales</h1>
        </div>
        <div className=' flex h-16 w-auto items-center px-10'>
            <ul className='flex justify-between items-center'>
                <li className='px-3 flex h-16 w-auto text-gray-700 items-center text-medium hover:bg-sky-200 cursor-pointer'>
                    <Link to='/'>Inicio</Link>
                </li>
                <li className='px-3 flex h-16 w-auto text-gray-700 items-center text-medium hover:bg-sky-200 cursor-pointer'>
                    <Link to='/plots'>
                        Gráficos
                    </Link>
                </li>
                <li className='px-3 flex h-16 w-auto text-gray-700 items-center text-medium hover:bg-sky-200 cursor-pointer'>
                    <Link to='/contacto'>Contacto</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
