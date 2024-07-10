const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { error } = require('console');


app.use(express.json());
app.use(cors());

// Connect to MongoDB 
mongoose.connect('mongodb+srv://yossr:youssrouch22@cluster0.scmoie2.mongodb.net/mrxstore')

//API creation
app.get('/', (req, res) => {
    res.send('Express APP is running')
})
//Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})
//Upload image
app.use('/images', express.static(path.join(__dirname, '/upload/images')))
app.post('/upload', upload.single('product'), (req, res) => {
  console.log('Text fields received:', req.body);
  const port = 4000; // Replace with your actual server port
  res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

//schema for creating a products
const productSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    old_price: {
      type: Number,
      required: true,
    },
    new_price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    available: {
      type: Boolean,
      default: true,
    },
  });
  
  // Create the Product model
  const Product = mongoose.model('Product', productSchema);
  
  // Example route for adding a product
  app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id ;
    if(products.length >0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    try {
      const newProduct = new Product({
        id:id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        old_price: req.body.price,
        new_price: req.body.new_price,
        available: req.body.available,
      });
  
      console.log(newProduct); // Log the new product instance
      await newProduct.save(); // Save the product to the database
      console.log('Product saved successfully');
      res.json({
        success: 1,
        name: req.body.name,
      });
    } catch (error) {
      console.error('Error saving product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // creating api for deleting products
  app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating api for getting all products
app.get('/allproducts' , async(req,res)=>{
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
})

//schema for creating a user model

const Users = mongoose.model('Users', new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}));

//creating api for user registration
app.post('/register', async (req, res) => {
  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false, message:"User already exists"});
  } 
  let cart =[]
  for (let i=0; i<300 ; i++){
    cart[i]=0;
  }
  const user = new Users({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
  })

  await user.save();

  const data = {
      user: {
          id: user.id,
      }
  }

  const token = jwt.sign(data,'secret_ecom');
  res.json({success:true, token:token});
}); 

//creating endpoint for user login
app.post('/login', async (req, res) => {
  let user = await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
      const data = {
          user: {
              id: user.id
          }
      }
      const token = jwt.sign(data,'secret_ecom');
      res.json({success:true,token});
  }
  else{
    res.json({success:false, errors:"wrong Password"});
  }
}
else{
  res.json({success:false, errors:"User not found"});
}
})

app.listen(port, (error) => {
    if (error) {
        console.log('Error :'+error);
    }
  else {
    console.log(`Server is running on port: ${port}`);
  }
})