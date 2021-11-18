"use strict";

let header = document.querySelector(".header");
let footer = document.querySelector(".footer");

header.innerHTML = `
<nav>
   <ul>
      <img class="logg" src="images_master_branch/logo.jpg" alt="Logo"
         style="width: 110px;height: 110px;margin-left:-37px;margin-top: -9px;position: absolute;">
      <li><button class="btn btn--login">LOGIN</button></li>
      <li> <a href="contact_us.html"> CONTACT</a> </li>
      <li> <a href="About.html">ABOUT</a></li>
      <li><a href="service.html">SERVICES</a></li>
      <li><a href="home.html">HOME</a> </li>
   </ul>
</nav>
`;

footer.innerHTML = `
   

<div class="container-2"
   style="display: flex;background-color: #443b5d;font-size: 32px;font-weight: 800;color: #eecccc;">

   <div class="article-1" style="flex: 1;">
      <img src="images_master_branch/logo.jpg" alt="Logo" width="210px"
         style="padding-top: 5px;padding-bottom: 0px;;">
   </div>
   <div class="article-2" style="flex: 1;">
      <p style="text-align: center;margin-left: -400px;padding-top: 20px;">
         Copyright &copy; 2021 Find a Therapist Kenya </p>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-linkedin"></a>
   </div>

   <div class="map" style="margin-right: 170px;margin-top: 20px;">
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364476102313!2d36.801273917180545!3d-1.268124685200886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637096543542!5m2!1sen!2ske"
         width="300" height="150"
         style="border:10px solid #cceeee;margin-top: -9px;margin-bottom: 10px;margin-right: -150px;"
         allowfullscreen="" loading="lazy"></iframe>
   </div>

</div>
`;
