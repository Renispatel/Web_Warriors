import React from 'react'
import './homePage.css'
import './herobg.webp'

const HomePage = () => {

   let now= new Date();
        let date = now.getDate()
        let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

        let first_digit = parseInt(date/10);
        let second_digit = parseInt(date%10);

        for(let i=0; i<=first_digit; i++){
            (function(i){
                setTimeout(function(){
                    document.getElementById("first-date").innerHTML = i;
                    console.log(i+"first")
                }, 200 * (i + 1) + 700);
            })(i);
        }

        for(let i=0; i<=second_digit; i++){
            (function(i){
                setTimeout(function(){
                    document.getElementById("second-date").innerHTML = i;
                    console.log(i+"second")
                }, 200 * (i + 1));
            })(i);
        }

        for(let i=0; i<=(now.getMonth()); i++){
            (function(i){
                setTimeout(function(){
                    document.getElementById("month").innerHTML = month[i];
                    console.log(i+"month")
                }, 300 * (i + 1));
            })(i);
        }

  return (
    <section id="main">
      <div className="hero">
        <img src="/" alt="" />
      </div>
      <div className="main-wraper">
        <div class="avilable-date ">
        
        
          <div className="date-counter-wrap">
            <span id="first-date">3</span>
            <span id="second-date">0</span>
          </div>
  
          <div className="date_text">
            <div id="month">jan</div>
            <span>avilable</span>
            <span>for work</span>
          </div>
        </div>
        <div className="text">
          <div className="all-lables">
            <span className="top-lable">creative</span>
            <span className="lable">WEB DEVELOPER</span>
            {/* <span className="lable"></span> */}
          </div>
          <div className="content-wrap ">
            <p className="topline">I AM SELF-TAUGHT WEB DEVELOPER</p>
            <p className="self-intro">
              based in INDIA. I'm passionate about creating beautiful and
              functional websites through SELF-DIRECTED STUDY and PRACTICAL
              EXPERIENCE. I love MINIMAL AND BRUTALIST design and also love
              NATURE, PIZZA, ART and ADVANTURE!
            </p>
            <button className="contact-button">CONTACT ME</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
