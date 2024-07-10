import React from 'react';
import './listproduct.css';

const ListProduct =()=> {
    
    const[allProducts, setAllProducts] = React.useState([]);

    const fetchiInfo = async () => {
        await fetch('http://localhost:4000/allproducts', {

        })
        .then((resp) => resp.json())
        .then((data) => {setAllProducts(data)});
    }
    React.useEffect(() => {
        fetchiInfo();
    }
    ,[]);
     const removeProduct = async (id) => {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'Post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id}),
      })
      await fetchiInfo();
    }
        return (
            <div>
                {/* Your component code here */}
                <h1>All Product list</h1>
                <div className="listproduct-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Old Price</p>
                    <p>New Price</p>
                    <p>Category</p>
                    <p>Remove</p>
                </div>
                <div className="list-product-allproducts">
                    <hr />
                    {allProducts.map((product,index) => {
                        return <>
                            <div className="listproduct-format-main listproduct-format" key={index}>
                                <img className='listproduct-product-icon' src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>{product.old_price}dt</p>
                                <p>{product.new_price}dt</p>
                                <p>{product.category}</p>
                                <button onClick={()=>{removeProduct(product.id)}}>Remove</button>
                            </div>
                            <hr />
                        </>
                    },)}
                </div>
            </div>
        );
    
}

export default ListProduct;