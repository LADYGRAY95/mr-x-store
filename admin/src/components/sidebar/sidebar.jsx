import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import plus from '../../assets/plus-svgrepo-com.svg';
import list from '../../assets/list-menu-svgrepo-com.svg';
import orders from '../../assets/free-delivery-free-svgrepo-com.svg';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* Sidebar content */}
            <Link to={'/addproduct'} style={{textDecoration:"none"}} className='sidebar-link'>
            <div className='sidebar-item'>
                <img src={plus} alt=""  />
                <p>Add Product</p>
            </div>
            </Link>
            <Link to={'/products'} style={{textDecoration:"none"}} className='sidebar-link'>
            <div className='sidebar-item'>
                <img src={list} alt="" />
                <p> All Products</p>
            </div>
            </Link>
            <Link to={'/orders'} style={{textDecoration:"none"}} className='sidebar-link'>
            <div className='sidebar-item'>
                <img src={orders} alt="" />
                <p>Orders</p>
            </div>
            </Link>
        </div>
    );
};

export default Sidebar;