import React from 'react';
import './navbar.css'

const Navbar = () => {
  // const progressBar = document.querySelector(".progressbar");
var app = document.body;
var html = document.documentElement;
var body = document.body;
var scrolltop = "scrollTop";
var scrollhight = "scrollHeight";
// let visitButton = document.getElementsByClassName("button")

// document.getElementsByClassName("xyz")[0].style.width =100+"%";

let btns = document.querySelectorAll('.button');

app.onscroll = async function () {
  let ScrollHeight =
    ((html[scrolltop] || body[scrolltop]) /
      ((html[scrollhight] || body[scrollhight]) - html.clientHeight)) *
    100;
  // let ScrollHeight = ScrolledHeight;
  console.log(ScrollHeight, "round height");
  document.getElementsByClassName("progressbar")[0].style.width =
    ScrollHeight + "%";

  if (ScrollHeight < 25) {
    let a = ScrollHeight / 28;
    console.log(a, "this is a");
    document.getElementsByClassName("hero")[0].style.opacity = 1 - a;
  }

  if (ScrollHeight > 2) {
    console.log("blur")
    document.querySelector(".nav-wrap").style.backdropFilter = "blur(6px)";
  } else {
    console.log("blur else")
    document.querySelector(".nav-wrap").style.backdropFilter = "blur(0px)";
  }
};
React.useEffect(()=>{
  function hendelnav(){
    if(window.innerWidth < 450){
      document.getElementById('navlogo').innerHTML = "Renish";
    }else{
       document.getElementById('navlogo').innerHTML = "Renish Patel";
    }

  }
  window.addEventListener('resize', hendelnav);
})

  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <ul role="list" className="logo">
          <li className="logo-name">
            {/* {(window.innerWidth < 315) ? <a href ="">Renis</a> : <a href ="">Renis Patel</a>} */}
            {/* <a id="logo-name" href="">{(window.innerWidth < 315) ? "Renis" : "Renis Patel"}</a> */}
            <a href='' id='navlogo'>Renis Patel</a>
          </li>
          <li className="nav-lable">WEB DEVELOPER</li>
        </ul>
        <ul role="list" className="navlist">
          <li>
            <a href="#cases">Work,</a>
          </li>
          <li>
            <a href="#intro-wrap">about,</a>
          </li>
          <li>
            <a href="#lets-connect">contact.</a>
          </li>
        </ul>
      </div>
      <div className="progressbar-wrap">
        <div className="progressbar"></div>
      </div>
    </nav>
  )
}

export default Navbar
