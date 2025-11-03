 import react from "react";
 import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

 function About(){
        return(
            <div>
                <Nav/>
                <section id="page-header" class="about-header">
    
    <h2>#knowUs</h2>
    
    <p>Lorem ipsum dolor sit amet, consectetur </p>
     
</section>

<section id="about-head" class="section-p1">
     <img src="img/about/a6.jpg" alt=""/>
     <div>
        <h2>Who we are?</h2>
        <p>Lorem dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloe magna aliqua. ut enim ad minim veniam, quis nosturd exericitation ullamco labrois nisi ut aliquip ex ea commodo consequent.Duis auterim dolor in reprehenderit in voluptate velit esse cillum dolare eu fugiat nulla paritar. Excepteur sint occeacat cupidatat non prodient, sunt in culpa qui offica doserent mollit anim  id est laborum</p>

        <abbr title="">Create stunning images with as much or as little control as you like thank to a choice of basic and creative modes.</abbr>

        <br/><br/>
     </div>
</section>

<section id="about-app" class="section-p1">
     <h1>Downlaod Our <a href="#">App</a></h1>
     <div class="video">
        <video autoplay muted loop src="img/about/1.mp4"></video>
     </div>
</section>

<section id="feature" class="section-p1">
    <div class="fe-box">
        <img src="img/features/f1.png" alt=""/>
        <h6>Free Shipping</h6>
    </div>
    <div class="fe-box">
        <img src="img/features/f2.png" alt=""/>
        <h6>Online Order</h6>
    </div>
    <div class="fe-box">
        <img src="img/features/f3.png" alt=""/>
        <h6>Save money</h6>
    </div>
    <div class="fe-box">
        <img src="img/features/f4.png" alt=""/>
        <h6>Promotions</h6>
    </div>
    <div class="fe-box">
        <img src="img/features/f5.png" alt=""/>
        <h6>Happy sell</h6>
    </div>
    <div class="fe-box">
        <img src="img/features/f6.png" alt=""/>
        <h6>F24/7 Support</h6>
    </div>
</section>


<section id="newsletter" class="section-p1 section-m1">
    <div class="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>Get E-Mail updates about our latest shop and <span>special offers.</span></p>
    </div>
    <div class="form">
        <input type="text" placeholder="Your email address"/>
        <button class="normal">Sign Up</button>
    </div>
</section>

            <Footer/>
            </div>

        )
    }
 
 export default  About