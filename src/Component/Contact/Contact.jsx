import react from "react"
import './contact.css'
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"


function Contact(){
    return(
        <div>
            <Nav/>
          <section id="page-header" class="about-header">
    
    <h2>#Let's_talk</h2>
    
    <p>LEAVE A MESSAGE. We love to hear from you! </p>
     
</section>

<section id="contact-details" class="section-p1">
    <div class="details">
       <span>GET IN TOUCH</span>
       <h2>Visit one of our agency locations or contact us today</h2>
       <h3>Head office</h3>
       <div>
           <li>
               <i class="bi bi-map"></i>
               <p>56 Glassford street glasgow G1 1UL NEW York</p>
           </li>
           <li>
               <i class="bi bi-envelope"></i>
               <p>contact@example.com</p>
           </li>
           <li>
               <i class="bi bi-telephone-fill"></i>
               <p>contact@example.com</p>
           </li>
           <li>
               <i class="bi bi-clock"></i>
               <p>Monday to saturday: 9:00 to 16.pm</p>
           </li>
       </div>
    </div>

    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9879.335543314573!2d-1.2653434317668193!3d51.754361049924576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1689764629366!5m2!1sen!2sin" width="600" height="450" style={{ border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>

<section id="form-details">
    <form action="">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <input type="text" placeholder="Your Name"/>
      <input type="text" placeholder="E-Mail"/>
      <input type="text" placeholder="Subject"/>
      <textarea name="" id="" cols="30" rows="10" placeholder="Your MESSAGE"></textarea>
      <button class="normal">Submit</button>
    </form>

    <div class="people">
        <div>
            <img src="img/people/1.png" alt=""/>
            <p><span>John Doe</span>Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/>Email: contact@example.com</p>
        </div>
        <div>
            <img src="img/people/2.png" alt=""/>
            <p><span>William Smith</span>Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/>Email: contact@example.com</p>
        </div>
        <div>
            <img src="img/people/3.png" alt=""/>
            <p><span>Emma Stone</span>Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/>Email: contact@example.com</p>
        </div>
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
export default  Contact