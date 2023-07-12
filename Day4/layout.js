import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import './layout.css'
export default function NavBar() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
     {
        url: "https://i.pinimg.com/originals/63/bf/0f/63bf0f5195646e5cd8ada16875de4b4b.png",
     },
     {
        url: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg",
     },
     {
        url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_640.jpg",
     },
     {
        url: "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_640.jpg",
     },
     {
        url: "https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_640.jpg",
     },
  ];
  return (
    <>
   <nav className="navbar">
      <div className="logo"><img src="https://as1.ftcdn.net/v2/jpg/03/74/79/38/1000_F_374793809_2pSlTx7fAUdhUQjD00yGVHkv1dejIdPA.jpg"className="custom-shape" />ArtVan Furniture</div>
      <ul className="nav-links">
        <li><Link to="/"class="active"><h2 className="name"><i class="fa fa-home" aria-hidden="true"></i>
        <br></br>Home</h2></Link></li>
        <li><Link to="/form"><h2 className="name"><i class="fa fa-sign-in" aria-hidden="true"></i><br></br>Signin</h2></Link></li>
        <li><Link to="/profile"><h2 className="name"><i class="fa fa-user" aria-hidden="true"></i><br></br>Profile</h2></Link></li>
      </ul>
    </nav>
   
<SimpleImageSlider
            width={1362}
            height={600}
            align-items={"center"}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
         <br></br>
        <center> <span>Our Speciallity</span></center>
         <div class="col">
        <Link to="/sofa"><img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" /></Link>
        <p>Sofa</p>
    </div>
    <div class="col">
        <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=857&q=80" />
    <p>Bed</p>
    </div>
    <div class="col">
        <img src="https://media.istockphoto.com/id/1329937916/photo/scandinavian-domestic-dining-room-interior.jpg?s=1024x1024&w=is&k=20&c=Kutzt5DumAWH0r6gxSf5eSWX2ZO5O-twwZ2xuUFOUDI="/>
    <p>Dinning Table</p>
    </div>
    <div class="col">
        <img src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
    <p>Kitchen</p>
    </div>
    <div class="col">
        <img src="https://media.istockphoto.com/id/1016998464/photo/sofa-cum-bed-in-living-room.jpg?s=612x612&w=0&k=20&c=fJ0A7KkOjL5wLt96QPrnjs6OfNLl1s9dVLefvdFU0hQ="/>
    <p>Sofa Cum Beds</p>
    </div>
    <div class="col">
        <img src="https://images.unsplash.com/photo-1593784991251-92ded75ea290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VHYlMjB1bml0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
    <p>Tv Units</p>
    </div>
    <div class="col">
        <img src="https://media.istockphoto.com/id/1207897525/photo/bookshelf-in-hall-room-with-lamp-and-books.jpg?s=612x612&w=0&k=20&c=eLY02EGr60v8wXgIQ-1Tdlo22PSLachsCV9wTIJCwp8="/>
    <p>Book Shelves</p>
    </div>
    <div class="col">
        <img src="https://media.istockphoto.com/id/1254646139/photo/comfortable-workplace-with-potted-plants-wall-organizer-pictures-and-computer.jpg?s=612x612&w=0&k=20&c=UxbAgfl2qvNWFTGD4TtKMT0RIlXHYWRLeVJSt6Xh6nU="/>
    <p>Study Tables</p>
    </div>
<footer>

      <div class="footer">
  <div class="column lef">
      <ul>
          <h3>About</h3>
          <br></br>
          <li>
            <Link to="/aboutUS">About Us</Link>
          </li>
          <br></br>
          <li>
            <Link to="/blo">Blog</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contactus">Career</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contact">Customer Stories</Link>
          </li>
          <br></br>
          </ul>
          </div>
          <div class="column rig">
            <ul>
          <h3>Help</h3>
          <br></br>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <br></br>
          <li>
            <Link to="/blo">Need Help</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contactus">Ask Experts</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contact">Track Order</Link>
          </li>
          </ul>
  </div>
          </div>
          <div class="column lef">
      <ul>
          <h3>UseFul Links</h3>
          <br></br>
          <li>
            <Link to="/about">Customer Furniture</Link>
          </li>
          <br></br>
          <li>
            <Link to="/blo">Refer & Earn</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contactus">Exporters</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contact">Buy in Bulk</Link>
          </li>
          <br></br>
          </ul>
          </div>
          <div class="column rig">
            <ul>
          <h3>Shop by Room</h3>
          <br></br>
          <li>
            <Link to="/about">Living Room</Link>
          </li>
          <br></br>
          <li>
            <Link to="/blo">Bed Room</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contactus">Kichen Room</Link>
          </li>
          <br></br>
          <li>
            <Link to="/contact">Home</Link>
          </li>
          </ul>
  </div>
  
      
    

     <div className="payme"> 
<img src="https://www.evok.in/media/wysiwyg/new-theme/payment.svg"></img>
</div>
    </footer>




    </>
  )
}
