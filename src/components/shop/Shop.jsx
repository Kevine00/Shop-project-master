import React from 'react'
import './shop.css'
import girl from '../../assets/girl.png'
import man from '../../assets/man.png'
import hoodie from '../../assets/hoodie.png'
import watch from '../../assets/watch.png'
import heels from '../../assets/heels.png'  
import sunglass from '../../assets/sunglass.png'
import tshirt from  '../../assets/tshirt.png'
import dress from  '../../assets/dress.png'
import suit from  '../../assets/suit.png'
import belt from  '../../assets/belt.png'
import baby from '../../assets/baby.png'
import hair from '../../assets/hair.png'
import blackman from '../../assets/blackman.png'
import blackgirl from '../../assets/blackgirl.png'
import cute from '../../assets/cute.png'
import miss from '../../assets/miss.png'
import woman from '../../assets/woman.png'
import lady from '../../assets/lady.png'
import smartgirl from '../../assets/smartgirl.png'
import map from '../../assets/map.jpg'


import { CiShoppingCart } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import { TbCircleLetterS } from "react-icons/tb";
import { TbCircleLetterL } from "react-icons/tb";
import { TbCircleLetterX } from "react-icons/tb";  
import { BsRecordCircle } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";


const Shop = () => {
  return (
<section >
    {/* .................starting section-1 ..................*/}
    <div className='section-1'>
    <div className='container'>

    <div className='nav1'>
    <ul>
        <li className='logo'><a href="" target=""><h2>Shope</h2></a></li>
        <li><a href="" target="" >Men</a></li>
        <li><a href="" target="" >Women</a></li>
        <li><a href="" target="" >Children</a></li>
        <li><a href="" target="" >Explore</a></li>
    </ul>
    </div>

    <div className='nav2'>
    <form>
    <input type="text" placeholder='search here....' />
    <CiShoppingCart color='gray' size={20}/>
    <CiBag1 color='gray' size={20}/>
    <GoPerson  color='gray' size={20}/>
    </form>
    </div>

</div>

<div className='body'>
<div className='part1'>
    <p>Summer colletcions</p>
    <br></br>
    <h1>Stripped woman dress</h1>
    <br></br>
    <br></br>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, autem.<br></br>
    Quibusdam asperiores qui deserunt modi soluta! Id tempora, optio debitis ea, <br></br>
    tenetur amet assumenda iusto blanditiis atque, eaque ipsa ipsam.</p>
    <br></br>
    <button className='btn-shopnow'>Shop now</button>
    <FaRegHeart  color='gray' size={15} />
    <MdOutlineShoppingBag color='gray'size={15}/>
  
    <div className='arrow'>
    <FaArrowLeft  color='gray'/>
    <FaArrowRight color='rgb(122, 122, 246)' />
    </div>
</div>


<div className='girl-shopping'>
    <img src={girl} alt="" />
</div>

<div>
    <p className='color'>color <BsRecordCircle color='grey'/>  <FaCircle /> <FaCircle color='orange' />  <FaCircle color='red' />  <FaCircle color='blue' />
   
</p>
    <br></br>
    <p className='details'>Social Number:756kh/k589<br></br>
    model size:s<br></br>
    heigth:5.57ft/230cm<br></br>
    select your sze<br></br>
    <TbCircleLetterS color='gray' />
    <AiFillMediumCircle />
    <TbCircleLetterL color='gray' /> 
    <TbCircleLetterX  color='gray'/></p>
    <br></br>
    <p className='price'>price <span id='money'>$115.99</span> $249.99</p>
</div>
       </div> 
       </div>
 
{/*.................. end section1.......................... */}


{/* .....................starting section-2................. */}

 <div className='section-2'>
<div className='cont'>

<div className='Man'>
    <div className='par1'>
    <p><h2>Men shirts</h2></p>
    <p>from.$28.6</p>
    <button className='btn'>Shop now</button>
    </div>
    <img src={man} alt="" />
</div>


<div className='pictures'>
    <div className='Hoodie'>
        <div>
        <p><h2>Hoodies</h2></p>
        <p>from $40.6</p>
        <button  className='btn'>Shop now</button>
        </div>
        <img src={hoodie} alt="" />
    </div>

        <div className='Watch'>
           <div>
           <p><h2>Watches</h2></p>
           <p>from $30.3</p>
           <button  className='btn'>Shop now</button>
           </div>
           <img src={watch}alt="" />
        </div>
</div>



<div className='Heels'>
     
        <div>
        <p><h2>Woman shoes</h2></p>
        <p>from $40.6</p>
        <button  className='btn'>Shop now</button>
        </div>
       <img src={heels} alt="" />
     
</div>


 </div>
</div>

{/* ...................starting section-3.................. */}
<div className='section-3'>
<h1>Top selling products</h1>
<div className='nav-section3'>
<ul>
    <li><a href="" target="_blank" rel="noopener noreferrer">All</a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer">man</a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer">woman</a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer">kid</a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer">shoe</a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer">watch</a></li>
</ul>
</div>

<div className='imyenda'>
    <div><img src={sunglass} alt="" /><h2>Sunglass</h2>from $50.0</div>
<div className='drip'><img src={tshirt} alt="" /><h2>Men t-shirt</h2>from $30.0 <p ><a id='select' href="" target="_blank" rel="noopener noreferrer"><BsCart color='blue'/> Select options</a></p></div>
<div><img src={dress} alt="" /><h2>Dress</h2>from $300.0</div>
<div><img src={suit} alt="" /><h2> Men Suit</h2>from $100.0</div>
<div className='drip'><img src={belt} alt="" /><h2>ladies belt</h2>from $40.0 <p><a href="" target="_blank" rel="noopener noreferrer"><BsCart/> Select options</a></p></div>
</div>
</div>

{/* ..............ending section-3......................... */}

{/* ..............starting section-4........................ */}
<div className='section-4'>
    <h1 className='h1-section-4'>Costumer review</h1>
     <div className='div-section-4'>
      <div className='review'>
           <div className='baby-pic'> <img src={baby} alt="" /> </div>
           <div className='hair-pic'><img src={hair} alt="" /></div>
           <div className='girl-pic'> <img src={blackgirl} alt="" /></div>
           <div className='man-pic'> <img src={blackman}alt="" /></div>
       </div>

       <div className='review-2'>
        
        <img src={cute}alt="" />
        
        <p id='name'>Hannah Mackay</p>
        <p id='work'>house wife</p>
        <p id='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
        </br> Earum cum voluptatibus, nam adipisci vitae, provident porro  <br>
        </br>sit repudiandae ea nostrum dicta, ut laborum deleniti ab possimus temporibus debitis.</p>
       </div>

       <div className='review-3'>
<div className='miss-photo'><img src={miss} alt="" /> </div>
<div className='woman-photo'><img src={woman}alt="" /></div>
<div className='lady-photo'><img src={lady} alt="" /></div>
       </div>
     </div>
 {/* ..............ending section-4......................... */}

{/* .............starting scetion-5..........................*/}

        <div className='section-5'>
<div className='div-section-5'> 
<img src={smartgirl} alt="" />
<div  className='icon1-section-5'><FaTimes  size={50}/> </div>
<div>
<h1>Get The Latest Deals</h1>
<p>And receive 30$ for first shopping</p>
<input type="text"  placeholder='order here' size={31}/>
</div>
<div className='icon2-section-5'><FaTimes  color='gray' size={50}/></div>
</div>
        </div>
</div>

{/* starting section-6 */}
<div className='section-6'>
<div className='div-section-6'>

<div className='shope'>
    <h1>Shope</h1>
   <img src={map} alt="" /><br></br>
   <BsTelephoneFill /> +250 788 678 231<br></br>
   <MdEmail />  Kevineumubyeyi9@gmail.com<br></br>
   <IoLocationSharp />  Office kg 213T
</div>
<div className='pages'>
    <h1>Pages</h1>
    <br></br>
 <span id='home'><a href="" target="_blank" rel="noopener noreferrer">Home</a> </span><br></br>
<a href="" target="_blank" rel="noopener noreferrer">About us</a><br></br>
<a href="" target="_blank" rel="noopener noreferrer">Fees&Times</a><br></br>
<a href="" target="_blank" rel="noopener noreferrer">Contact us</a><br></br>
</div>

<div className='support'>
    <h1>Support</h1>
    <br></br>
    <a href="" target="_blank" rel="noopener noreferrer">Help center</a><br></br>
    <a href="" target="_blank" rel="noopener noreferrer">About us</a><br></br>
    <a href="" target="_blank" rel="noopener noreferrer">Contact us</a><br></br>
    <a href="" target="_blank" rel="noopener noreferrer">Resources</a><br></br>
</div>
<div className='get-in-touch'>
    <h1>Get in touch</h1>
    <br></br>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br>
    <input id='text' type="text" placeholder='what is your name' /><button id='sub'>subscribe</button><br></br>

    <a href="https://www.facebook.com/yna.kendrakevine/"><CgFacebook /></a><a href="https://twitter.com/UKevine51306"> <FaTwitter  color='blue' /></a> <a href="https://www.instagram.com/kevy_____u/"><GrInstagram/></a> <a href="https://www.linkedin.com/in/umubyeyi-kevine-109ab42a5/"> <BsLinkedin /></a>

</div>

</div>
<p id='footer'>@2017 All right copyright shope</p>
</div>

{/* ............ending section-6....................... */}

</section>

  )
}
export default Shop
