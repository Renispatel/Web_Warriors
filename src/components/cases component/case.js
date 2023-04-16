import React, { useEffect, useState } from 'react'
import './case.css';
import {data} from '../data/projects_details' 

const Case = () => {
 
  
  
  // const data = (JSON.parse(Project_details)).data;
  
  useEffect(()=>{
  
  function initImagePopup(elem){
    // console.log(elem)
    // check for mouse click, add event listener on document
    
    
    document.addEventListener('click', function (e) {
     
    
        // check if click target is img of the elem - elem is image container
        if (!e.target.matches(elem +' img')) {
          return;
        }
        else{

            var image = e.target; // get current clicked image
            console.log(image.id);
            // create new popup image with all attributes for clicked images and offsets of the clicked image
            var popupImage = document.createElement("img"); 
            popupImage.setAttribute('src', image.src);
            popupImage.style.width = image.width+"px";
            popupImage.style.height = image.height+"px";
            popupImage.style.left = image.offsetLeft+"px";
            popupImage.style.top = image.getBoundingClientRect().top + 'px';
            popupImage.style.bottom = image.getBoundingClientRect().bottom + 'px';

            console.log(image.getBoundingClientRect(), "Position");
            

            popupImage.classList.add('popImage');

            // creating popup image container
            var popupContainer = document.createElement('div')
            popupContainer.classList.add('popupContainer')

            // creating popup image background
            var popUpBackground = document.createElement('div')
            popUpBackground.classList.add('popUpBackground')

            //creating footer for popup

            let footer = `
            <a href="https://www.w3schools.com">Visit W3Schools.com!</a>`
            var popUpfooter = document.createElement('div')
            popUpfooter.classList.add('popUpfooter')
            popUpfooter.innerHTML = footer;

            //
            let box = `
            <h2>${data[image.id].title}</h2>
            <p>${data[image.id].details}</p>`

            var popUptext = document.createElement('div')
            popUptext.classList.add('popUptext')
            popUptext.innerHTML = box



            // append all created elements to the popupContainer then on the document.body
            popupContainer.appendChild(popUpBackground)
            popupContainer.appendChild(popUptext)
            popupContainer.appendChild(popupImage)
            popupContainer.appendChild(popUpfooter)
            document.body.appendChild(popupContainer)


            // call function popup image to create new dimensions for popup image and make the effect
            popupImageFunction();


            // resize function, so that popup image have responsive ability
            var wait;
            window.onresize = function(){
                clearTimeout(wait);
                wait = setTimeout(popupImageFunction, 100);
            };

            // close popup image clicking on it
            popupImage.addEventListener('click', function (e) {
                closePopUpImage();
              
                
                
            });
            // close popup image on clicking on the background
            popUpBackground.addEventListener('click', function (e) {
                closePopUpImage();
               
             

            });


            function popupImageFunction(){
                // wait few miliseconds (10) and change style of the popup image and make it popup
                // waiting is for animation to work, yulu can disable it and check what is happening when it's not there
                setTimeout(async function(){      
                    // I created this part very simple, but you can do it much better by calculating height and width of the screen,
                    // image dimensions.. so that popup image can be placed much better
                    popUpBackground.classList.add('active');
                    popupImage.style.left = "15%";
                    popupImage.style.top = (window.innerWidth)>600 ? "20%" : "55%";
                    // popupImage.style.height = (window.innerWidth)>600 ? "200px" : "100px";
                    
                    
                    popupImage.style.width = window.innerWidth * 0.7 +"px";
                    console.log("558585")
                    popupImage.style.height = ((image.height / image.width) * (window.innerWidth * 0.7))+"px";
                    document.body.classList.add('body_class');

                    //---------to set img as background
                    // popUpBackground.style.backgroundImage ="url('"+image.src+"')";
                    // popUpBackground.style.backgroundRepeat = "no-repeat";
                    // popUpBackground.style.backgroundPosition = "center";
                    // popUpBackground.style.backgroundSize ="cover";
                    // popUpBackground.style.filter ="blur(15px)";

                    popUpBackground.style.backgroundColor = "black";                    
                    popUpBackground.style.opacity = "1.2";
                }, 10);
            }

            // function for closing popup image, first it will be return to the place where 
            // it started then it will be removed totaly (deleted) after animation is over, in our case 300ms
            function closePopUpImage(){
                popupImage.style.width = image.width+"px";
                popupImage.style.height = image.height+"px";
                popupImage.style.left = image.offsetLeft+"px";
                 popupImage.style.top = image.getBoundingClientRect().y + 'px';
                  popupImage.style.bottom = image.getBoundingClientRect().bottom + 'px';
                popUpBackground.classList.remove('active');
                  document.body.classList.remove('body_class');
                // popupContainer.style.justifyContent = "flex-start";
                setTimeout(function(){      
                    popupContainer.remove();
                }, 300);
                  console.log("imgClose")
            }
            
        }
    });
}

// Start popup image function
initImagePopup(".img-container") 
},[])// elem = image container
  return (
    <div className="container ">
      {data.map((list)=>{
        return(
        <div className='container__wrapper reveal'>
          <div className="img-container">
            {console.log(list.src)}
            <img key={list.id} id={list.id} alt=" " src={list.src}/>
          </div>
          <div className='text__details'>
            <h2>{list.title}</h2>
          </div>
        </div>
          );
        })}
    </div>
    
  )
}

export default Case
