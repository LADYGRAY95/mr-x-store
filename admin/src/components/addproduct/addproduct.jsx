import React from 'react';
import './addproduct.css';
import upload from '../../assets/upload.jpeg';


const AddProduct =()=> {

    const[image, setImage] = React.useState(false);
    const[productDetails, setProductDetails] = React.useState({
        name: '',
        image: '',
        category: '',
        price: '',
        new_price: '',
      
    });

    const changehandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value});
    }
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {responseData = data;})

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {data.success?alert('Product added successfully'):alert('Product not added');})
        }
    }
return ( 
            
            <div className='add-product'>
                {/* component's content here */}
                <div className="addproduct-itemfield">
                    <p>Product tiltle </p>
                    <input  value={productDetails.name} onChange={changehandler} type="text" name='name' placeholder="type here" />
                </div>
                <div className="addproduct-price">
                    <div className="addproduct-itemfield">
                        <p>Price</p>
                        <input value={productDetails.price} onChange={changehandler}type="text" name='price' placeholder="type here" />
                    </div>
                    <div className="addproduct-itemfield">
                        <p>Offer Price</p>
                        <input value={productDetails.new_price} onChange={changehandler} type="text" name='new_price' placeholder="type here" />
                    </div>
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Category</p>
                    <select value={productDetails.category} onChange={changehandler} name="category" className='add-product-selector'>
                        <option value="gameacct">Game accounts</option>
                        <option value="gamekey">Game Keys</option>
                        <option value="ingamecred">In game credits</option>
                        <option value="psgames">Ps games</option>
                        <option value="xboxgames">Xbox games</option>
                        <option value="socialmediaboost">Social media Boosting</option>
                        <option value="socialmediasponsor">Social media Sponsoring</option>
                        <option value="netflix">Netflix</option>
                        <option value="spotify">Spotify</option>
                        <option value="pspass">Psn pass</option>
                        <option value="xpass">Xbox pass</option>
                        <option value="software">Softwares</option>
                        <option value="steam">Steam Gift card</option>
                        <option value="itunes">itunes Gift card</option>
                        <option value="psngift">Psn Gift card</option>
                        <option value="xboxgiftcard">xbox gift card</option>
                    </select>
                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        <img src={image?URL.createObjectURL(image):upload} className="addproduct-thumnail-img" alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id="file-input" hidden />
                </div>
                <button onClick={()=>{Add_Product()}} className='addproduct-btn'> ADD</button>
            </div>
        );
    
}

export default AddProduct;