import React from 'react';
import './admin.css'
import Sidebar from '../../components/sidebar/sidebar';
import {Routes, Route} from 'react-router-dom';
import AddProduct from '../../components/addproduct/addproduct';
import ListProduct from '../../components/listproduct/listproduct';

const Admin = () => {
    return (
        <div className='admin'>
            {/* Your code goes here */}
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>} />
                <Route path='/products' element={<ListProduct/>} />
                <Route path='/orders' element={<h1>Orders</h1>} />
            </Routes>
        </div>
    );
};

export default Admin;