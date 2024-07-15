import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import backgroundImage from '/app/login.jpg';

const bgImages = {
  backgroundImage: `url(${backgroundImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100%',
}

const LoginPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [animation, setAnimation] = useState(false);
  const[formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  });

  const handleClick = () => {
    setIsRegister(!isRegister);
    setAnimation(true);
    console.log(isRegister ,formData);
  };
  const chnagehundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const login = async() => {
    console.log("login " ,formData);
  }
  const Register = async() => {
    console.log("registed",formData);
  }
 

  
  return (
    <div className="">
      <Navbar />

      <div className='min-h-[650px] bg-gray-100' style={bgImages}>
        <div className='min-h-[650px] backdrop-blur-sm flex justify-center items-center'>
          <div className="relative flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col max-h-[420px] overflow-hidden rounded-lg shadow-lg">
              <button onClick={handleClick} className="text-white text-4xl justify-center flex font-bold cursor-pointer transition-all duration-500 ease-in-out">
                {isRegister ? 'Register' : 'Log in'}
              </button>

              {!isRegister && (
                <div className="login relative w-full h-full">
                          <form className="flex flex-col space-y-3.5 p-6">
                            <input className="w-full h-10 p-2.5 outline-primary text-black rounded-md" type="email" name="email" value={formData.email} onChange={chnagehundler} placeholder="Email" required />
                            <input className="w-full h-10 p-2.5 outline-primary text-black rounded-md" type="password" name="password" value={formData.password} onChange={chnagehundler} placeholder="Password" required />
                            <a onClick={handleClick} className='hover:text-primary'>Don't have an account ?</a>
                            <button className="w-4/5 h-10 mx-auto my-3 text-red-500 bg-secondary text-base font-bold border-none rounded-md cursor-pointer transition-all duration-200 ease-in hover:bg-primary hover:text-white">Log in</button>
                          </form>
                  
                </div>
              )}

              {isRegister && (
                <div className={`register rounded-[60%]/[10%] transform-gpu transition-transform duration-800 ease-in-out ${animation ? '' : 'translate-y-full'}`}>
                 <form className="flex flex-col space-y-3.5 p-6">
                  <input className="w-full h-10 p-2.5 outline-primary  text-black rounded-md" type="text" name="txt" placeholder="Username" required />
                  <input className="w-full h-10 p-2.5 outline-primary  text-black rounded-md" type="email" name="email" placeholder="Email" required />
                  <input className="w-full h-10 p-2.5 outline-primary  text-black rounded-md" type="password" name="pswd" placeholder="Password" required />
                  <input className="w-full h-10 p-2.5 outline-primary  text-black rounded-md" type="password" name="confirmPswd" placeholder="Confirm Password" required />
                  <a onClick={handleClick} className='hover:text-primary'>Already have an account ?</a>
                  <button className="w-4/5 h-10 mx-auto my-3 text-red-500 text-base font-bold border-none rounded-md cursor-pointer transition-all duration-200 ease-in hover:bg-red-500 hover:text-white">Register</button>
                 </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;