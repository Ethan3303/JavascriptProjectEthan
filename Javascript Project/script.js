//with this one I used getElementById to customise and change the styles and aspects of an image using Javasript instead of css, this was to show my understanding of how to apply Javascript to HTML but this is the only example due to wanting to show my knowledge of Javascript instead of foucusing on HTML
let ybk=document.getElementById("YBK")
ybk.src="bkhead2.png";
ybk.alt="your_burger_king";
ybk.style.height="30";
ybk.style.width="180";
ybk.style.marginTop="-80px";
ybk.style.float="left";
document.body.appendChild(ybk)

//The first button
//apart from the header all of my code is in javascript using the createElement function
let bklin1 = document.createElement("a")
//inneText is what I commonly used to write text in any of the Javascript cretated elements
bklin1.innerText="Order now";
//the href is the link that the button will take you to and since it is not an actual website all of them just return the user to the main website
bklin1.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
//the style property is the main part of the script that was used to customise and change the elements like CSS and this could be used to change colour, font, positioning and many other aspects of the elements
bklin1.style.color = "white";
bklin1.style.backgroundColor = "red";
bklin1.style.textDecoration = "none";
bklin1.style.borderRadius = "50px";
bklin1.style.marginLeft="450px";
bklin1.style.marginTop="430px";
bklin1.style.position="absolute";
bklin1.style.paddingLeft="15px";
bklin1.style.paddingRight="15px";
bklin1.style.paddingTop="10px";
bklin1.style.paddingBottom="10px";
//This classname and a few others are used only in the Javascript and are later applied to a function further down in the script
bklin1.className = "hover";
//the appendChild function is used to add the element to the body of the website and this was all done without HTML/CSS
document.body.appendChild(bklin1)

//The first image
//this is the first of 3 top body images (at the time of making there were only 3 and it might have changed since submitting) and they are all formatted simialrly to eachother a part from some positioning attributes and image src
let bkimg1 = document.createElement("img");
bkimg1.src = "bkim1.jpeg";
bkimg1.alt = "burgerking_image1";
bkimg1.height="300"
bkimg1.width="600"
bkimg1.style.marginTop = "100px";
bkimg1.style.borderTopLeftRadius= "10px";
bkimg1.style.borderTopRightRadius= "10px";
bkimg1.style.textAlign="center";
document.body.appendChild(bkimg1);

//The first header
let bkpa1 = document.createElement("h1");
bkpa1.innerText = "BK® Delivers, powered by Deliveroo®";
bkpa1.style.textAlign = "left";
bkpa1.style.width = "560px";
bkpa1.style.color = "#5c2626";
bkpa1.style.marginLeft = "-310px";
bkpa1.style.marginTop = "-15px";
bkpa1.style.padding="20px";
//position absolute makes it so the different texts will always be in the same place no matter where the page is positioned
bkpa1.style.position="absolute";
//The style.Left means that the images will always be 50% off the side of the screen
bkpa1.style.left = "50%"; 
//The transforms makes it so that the text with move on the x axis at -50% of its speed due to a conflict of width attribute and text align
bkpa1.style.transform = "translateX(-50%)";
//bkpa stands for burkerking paragraph and is the class thats applied to several of the paragraphs to apply a few CSS functions to them to show my knowledge but not all of them to show that both can be used at the same time to create a more authentic website
bkpa1.className= "bkpa";
document.body.appendChild(bkpa1)

//The first paragraph
//most of the attriubtes are the same as the first header but with different text and positioning and the same rules apply here to most of the other h1's and p's
let bkpa2 = document.createElement("p");
bkpa2.innerText = "Get your flame-grilled favourites straight to your door today!";
bkpa2.style.textAlign = "left";
bkpa2.style.color = "#5c2626";
bkpa2.style.fontSize = "15px";
bkpa2.style.width = "560px";
bkpa2.style.margin = "-310px";
bkpa2.style.marginTop="30px";
bkpa2.style.paddingTop="20px";
bkpa2.style.paddingBottom="38px";
bkpa2.style.paddingLeft="20px";
bkpa2.style.paddingRight="20px";
bkpa2.style.position="absolute";
bkpa2.style.left = "50%"; 
bkpa2.style.transform = "translateX(-50%)";
bkpa2.className= "bkpa";
document.body.appendChild(bkpa2)

//The second button
let bklin2 = document.createElement("a")
bklin2.innerText="Discover the range";
bklin2.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
bklin2.style.color = "white";
bklin2.style.backgroundColor = "red";
bklin2.style.textDecoration = "none";
bklin2.style.borderRadius = "50px";
bklin2.style.marginLeft="400px";
bklin2.style.marginTop="430px";
bklin2.style.paddingLeft="15px";
bklin2.style.paddingRight="15px";
bklin2.style.position="absolute";
bklin2.style.paddingTop="10px";
bklin2.style.paddingBottom="10px";
bklin2.className = "hover";
document.body.appendChild(bklin2)

//The second image
let bkimg2 = document.createElement("img");
bkimg2.src = "bkim2.jpeg";
bkimg2.alt = "burgerking_image2";
bkimg2.height="300";
bkimg2.width="600";
bkimg2.id = "peppercorncollection";
bkimg2.style.marginLeft = "20px";
bkimg2.style.borderTopLeftRadius= "10px";
bkimg2.style.borderTopRightRadius= "10px";
bkimg2.style.position="relative";
document.body.appendChild(bkimg2);

//The second header
let bkpa3 = document.createElement("h1");
bkpa3.innerText = "Peppercorn Gourmet Kings";
bkpa3.style.textAlign = "left";
bkpa3.style.color = "#5c2626";
bkpa3.style.width = "560px";
bkpa3.style.marginRight = "-910px"
bkpa3.style.marginTop = "-15px";
bkpa3.style.padding="20px";
bkpa3.style.position="absolute";
bkpa3.style.right = "50%"; 
bkpa3.style.transform = "translateX(-50%)";
bkpa3.className= "bkpa";
document.body.appendChild(bkpa3)

//The second paragraph
let bkpa4 = document.createElement("p");
bkpa4.innerText = "150g of Aberdeen Angus or Crispy Chicken with a \n classic Peppercorn mayo";
bkpa4.style.textAlign="left";
bkpa4.style.color = "#5c2626";
bkpa4.style.fontSize = "15px";
bkpa4.style.width = "560px";
bkpa4.style.marginRight = "-910px";
bkpa4.style.marginTop="30px";
bkpa4.style.padding="20px";
bkpa4.style.position="absolute";
bkpa4.style.right = "50%"; 
bkpa4.style.transform = "translateX(-50%)";
bkpa4.className= "bkpa";
document.body.appendChild(bkpa4);

//The third image
let bkimg3 = document.createElement("img");
bkimg3.src = "bkim3.jpeg";
bkimg3.alt = "burgerking_image3";
bkimg3.height="300";
bkimg3.width="600";
bkimg3.style.marginTop="150px";
bkimg3.style.marginRight="620px";
bkimg3.id = "peppercorncollection";
bkimg3.style.borderTopLeftRadius= "10px";
bkimg3.style.borderTopRightRadius= "10px";
document.body.appendChild(bkimg3);

//The third button
let bklin3 = document.createElement("a")
bklin3.innerText="Order now";
bklin3.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
bklin3.style.color = "white";
bklin3.style.backgroundColor = "red";
bklin3.style.textDecoration = "none";
bklin3.style.borderRadius = "50px";
bklin3.style.marginLeft="-100px";
bklin3.style.marginTop="480px";
bklin3.style.position="absolute";
bklin3.style.paddingLeft="15px";
bklin3.style.paddingRight="15px";
bklin3.style.paddingTop="10px";
bklin3.style.paddingBottom="10px";
bklin3.style.left = "50%"; 
bklin3.style.transform = "translateX(-50%)";
bklin3.className = "hover";
document.body.appendChild(bklin3);

//The third header
let bkpa5 = document.createElement("h1");
bkpa5.innerText = "NEW Doritos Tangy Cheese Chicken Fries";
bkpa5.style.textAlign="left";
bkpa5.style.color = "#5c2626";
bkpa5.style.width = "560px";
bkpa5.style.marginLeft = "-310px";
bkpa5.style.marginTop = "-15px";
bkpa5.style.padding="20px";
bkpa5.style.position="absolute";
bkpa5.style.left = "50%"; 
bkpa5.style.transform = "translateX(-50%)";
bkpa5.className= "bkpa";
document.body.appendChild(bkpa5)

//The third paragraph
let bkpa6 = document.createElement("p");
bkpa6.innerText = "Chicken Fries, but make it Tangy. Get your hands on this \n tasty collaboration!";
bkpa6.style.textAlign="left";
bkpa6.style.color = "#5c2626";
bkpa6.style.fontSize = "15px";
bkpa6.style.width = "560px";
bkpa6.style.marginLeft = "-310px";
bkpa6.style.marginTop="30px";
bkpa6.style.padding="20px";
bkpa6.style.position="absolute";
bkpa6.style.left = "50%"; 
bkpa6.style.transform = "translateX(-50%)";
bkpa6.className= "bkpa";
document.body.appendChild(bkpa6)

//Here I applied the hover ID from the buttons to create several hover over functions that change the colour of the buttons once hovered over and off of
let hover = document.getElementsByClassName("hover")[0];

//by adding the event listener "mouseover" it functioned as a hover over aspect and the event listener "mouseout" functioned as a hover off aspect and i repeated this 3 times
hover.addEventListener('mouseover', function() {
  hover.style.backgroundColor = '#CD5C5C';
});

hover.addEventListener('mouseout', function() {
    hover.style.backgroundColor = 'red';
});

let hover1 = document.getElementsByClassName("hover")[1];

hover1.addEventListener('mouseover', function() {
  hover1.style.backgroundColor = '#CD5C5C';
});

hover1.addEventListener('mouseout', function() {
    hover1.style.backgroundColor = 'red';
});

let hover2 = document.getElementsByClassName("hover")[2];

hover2.addEventListener('mouseover', function() {
  hover2.style.backgroundColor = '#CD5C5C';
});

hover2.addEventListener('mouseout', function() {
    hover2.style.backgroundColor = 'red';
});

//The fourth image which is the phone centred at the bottom of the page
let bkimg4 = document.createElement("img");
bkimg4.src="bkim4.png";
bkimg4.alt = "burgerking_image4";
bkimg4.style.marginTop="600px";
bkimg4.style.height="600px";
bkimg4.style.width="400px";
bkimg4.style.position="absolute";
bkimg4.style.left = "50%"; 
bkimg4.style.transform = "translateX(-50%)";
document.body.appendChild(bkimg4);

//The big text by the phone at the bottom of the website
let bkpa7 = document.createElement("h1")
//for this text to get it to break in the places I wanted it to like the actual website i added the \n which breaks up the text into multiple lines
bkpa7.innerText="Save £££ \n with offers on \n demand";
bkpa7.style.position="absolute";
bkpa7.style.textAlign ="left";
bkpa7.style.fontSize="60px";
bkpa7.style.right = "50%"; 
bkpa7.style.transform = "translateX(-50%)";
bkpa7.style.marginTop="300px";
bkpa7.style.marginRight="-780px";
bkpa7.style.color="#5c2626";
bkpa7.style.fontWeight="bold";
bkpa7.style.textShadow="1px";
document.body.appendChild(bkpa7);

//the fifth image which is also clickable to be used as a link
let bklin4 = document.createElement("img")
bklin4.src="bkim5.png";
bklin4.alt = "app_store";
bklin4.style.width="150px";
bklin4.style.height="50px";
bklin4.style.borderRadius = "10px";
bklin4.style.marginLeft="320px";
bklin4.style.marginTop="1000px";
bklin4.style.position="absolute";
bklin4.style.paddingLeft="15px";
bklin4.style.paddingRight="15px";
bklin4.style.paddingTop="10px";
bklin4.style.paddingBottom="10px";
bklin4.style.left = "50%"; 
bklin4.style.transform = "translateX(-50%)";
//This is done a few times but its to show a function being used inside of an appended element, with it I can make this image into a link with the onclick function 
bklin4.onclick=function(){
  window.location.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
};
document.body.appendChild(bklin4);

//the sixth image which works just like the fifth image but is in a different position
let bklin5 = document.createElement("img")
bklin5.src="bkim6.png";
bklin5.alt = "google_play";
bklin5.style.width="150px";
bklin5.style.height="50px";
bklin5.style.borderRadius = "10px";
bklin5.style.marginLeft="500px";
bklin5.style.marginTop="1000px";
bklin5.style.position="absolute";
bklin5.style.paddingLeft="15px";
bklin5.style.paddingRight="15px";
bklin5.style.paddingTop="10px";
bklin5.style.paddingBottom="10px";
bklin5.style.left = "50%"; 
bklin5.style.transform = "translateX(-50%)";
bklin5.onclick=function(){
  window.location.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
};
  document.body.appendChild(bklin5);

//The small text under the big text
let bkpa8 = document.createElement("p")
bkpa8.innerText="Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. \n and other countries. App Store is a service mark of Apple Inc. Google Play is a \n trademark of Google Inc. Terms apply.";
bkpa8.style.position="absolute";
bkpa8.style.textAlign ="left";
bkpa8.style.fontSize="12px";
bkpa8.style.right = "50%"; 
bkpa8.style.transform = "translateX(-50%)";
bkpa8.style.marginTop="650px";
bkpa8.style.marginRight="-850px";
bkpa8.style.color="#5c2626";
bkpa8.style.fontWeight="bold";
bkpa8.style.textShadow="1px";
document.body.appendChild(bkpa8);

//I used the div element to create the background colour behind the big phone and the text and it turned out better than i could have hoped with shape and positioning
let foot1 = document.createElement("div");
foot1.style.marginTop="250px";
foot1.style.backgroundColor="#EDE1CB";
foot1.style.height="500px";
document.body.appendChild(foot1);

//This is one of the 3 big white texts found at the header
let list1=document.createElement("h1");
list1.textContent="BK® INFO"
list1.style.marginLeft="8%";
list1.style.fontSize="25px";
list1.style.marginTop="100px";
list1.style.position="absolute";
list1.style.color="white";
document.body.appendChild(list1);

//this is one of many of anchors positioned in the footer to create the massive menu tht displays all of the links to the other pages, there was probably a simpler much shorter way of doing it but this worked out just as fine due to letting me position things exactly how i wanted
let list2=document.createElement("a");
list2.textContent="About BK ®";
list2.style.float="left";
list2.style.fontSize="15px";
list2.style.marginLeft="8%";
list2.style.marginTop="140px";
list2.style.textDecoration="none";
list2.style.color="grey";
list2.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
//This is both the mouserover and mouseout function put inside the element rather than it being outside with a classname/id
list2.addEventListener('mouseover', function() {
  list2.style.textDecoration = 'underline';
});
list2.addEventListener('mouseout', function() {
  list2.style.textDecoration = 'none';
});
document.body.appendChild(list2);

let list3=document.createElement("a");
list3.textContent="FAQs";
list3.className="list";
list3.style.float="left";
list3.style.fontSize="15px";
list3.style.marginLeft="-70px";
list3.style.marginTop="160px";
list3.style.textDecoration="none";
list3.style.color="grey";
list3.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list3.addEventListener('mouseover', function() {
  list3.style.textDecoration = 'underline';
});
list3.addEventListener('mouseout', function() {
  list3.style.textDecoration = 'none';
});
document.body.appendChild(list3);

let list4=document.createElement("a");
list4.textContent="Policies";
list4.style.float="left";
list4.style.fontSize="15px";
list4.style.marginLeft="-70px";
list4.style.marginTop="180px";
list4.style.textDecoration="none";
list4.style.color="grey";
list4.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list4.addEventListener('mouseover', function() {
  list4.style.textDecoration = 'underline';
});
list4.addEventListener('mouseout', function() {
  list4.style.textDecoration = 'none';
});
document.body.appendChild(list4);

let list5=document.createElement("a");
list5.textContent="Get in touch";
list5.style.float="left";
list5.style.fontSize="15px";
list5.style.marginLeft="-70px";
list5.style.marginTop="200px";
list5.style.textDecoration="none";
list5.style.color="grey";
list5.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list5.addEventListener('mouseover', function() {
  list5.style.textDecoration = 'underline';
});
list5.addEventListener('mouseout', function() {
  list5.style.textDecoration = 'none';
});
document.body.appendChild(list5);

let list6=document.createElement("a");
list6.textContent="Terms & Conditions";
list6.style.float="left";
list6.style.fontSize="15px";
list6.style.marginLeft="-80px";
list6.style.marginTop="220px";
list6.style.textDecoration="none";
list6.style.color="grey";
list6.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list6.addEventListener('mouseover', function() {
  list6.style.textDecoration = 'underline';
});
list6.addEventListener('mouseout', function() {
  list6.style.textDecoration = 'none';
});
document.body.appendChild(list6);

let list7=document.createElement("a");
list7.textContent="Guest Trac";
list7.style.float="left";
list7.style.fontSize="15px";
list7.style.marginLeft="-130px";
list7.style.marginTop="240px";
list7.style.textDecoration="none";
list7.style.color="grey";
list7.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list7.addEventListener('mouseover', function() {
  list7.style.textDecoration = 'underline';
});
list7.addEventListener('mouseout', function() {
  list7.style.textDecoration = 'none';
});
document.body.appendChild(list7);

let list8=document.createElement("a");
list8.textContent="Trademarks";
list8.style.float="left";
list8.style.fontSize="15px";
list8.style.marginLeft="-130px";
list8.style.marginTop="260px";
list8.style.textDecoration="none";
list8.style.color="grey";
list8.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list8.addEventListener('mouseover', function() {
  list8.style.textDecoration = 'underline';
});
list8.addEventListener('mouseout', function() {
  list8.style.textDecoration = 'none';
});
document.body.appendChild(list8);

//The second big white text that goes above the second menu of links
let list9=document.createElement("h1");
list9.textContent="BK® AND YOU"
list9.style.marginLeft="50%";
list9.style.fontSize="25px";
list9.style.marginTop="100px";
list9.style.position="absolute";
list9.style.color="white";
document.body.appendChild(list9);

let list10=document.createElement("a");
list10.textContent="Careers";
list10.style.textAlign="center";
list10.style.fontSize="15px";
list10.style.marginLeft="-130px";
list10.style.marginTop="140px";
list10.style.textDecoration="none";
list10.style.color="grey";
list10.style.position="absolute";
list10.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list10.addEventListener('mouseover', function() {
  list10.style.textDecoration = 'underline';
});
list10.addEventListener('mouseout', function() {
  list10.style.textDecoration = 'none';
});
document.body.appendChild(list10);

let list11=document.createElement("a");
list11.textContent="Privacy Policy";
list11.style.textAlign="center";
list11.style.fontSize="15px";
list11.style.marginLeft="-130px";
list11.style.marginTop="160px";
list11.style.textDecoration="none";
list11.style.color="grey";
list11.style.position="absolute";
list11.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list11.addEventListener('mouseover', function() {
  list11.style.textDecoration = 'underline';
});
list11.addEventListener('mouseout', function() {
  list11.style.textDecoration = 'none';
});
document.body.appendChild(list11);

let list12=document.createElement("a");
list12.textContent="Modern Slavery Statement";
list12.style.textAlign="center";
list12.style.fontSize="15px";
list12.style.marginLeft="-130px";
list12.style.marginTop="180px";
list12.style.textDecoration="none";
list12.style.color="grey";
list12.style.position="absolute";
list12.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list12.addEventListener('mouseover', function() {
  list12.style.textDecoration = 'underline';
});
list12.addEventListener('mouseout', function() {
  list12.style.textDecoration = 'none';
});

document.body.appendChild(list12);

let list13=document.createElement("a");
list13.textContent="Tax Strategy";
list13.style.textAlign="center";
list13.style.fontSize="15px";
list13.style.marginLeft="-130px";
list13.style.marginTop="200px";
list13.style.textDecoration="none";
list13.style.color="grey";
list13.style.position="absolute";
list13.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
list13.addEventListener('mouseover', function() {
  list13.style.textDecoration = 'underline';
});
list13.addEventListener('mouseout', function() {
  list13.style.textDecoration = 'none';
});
document.body.appendChild(list13);

//Here is where I created the footer using Javascript and applied the colouring and size
let foot2 = document.createElement("footer");
foot2.style.backgroundColor="#3f0000";
foot2.style.height="600px";
document.body.appendChild(foot2);

//This is where i applied the two horizontal rules to mimic the website with their attributes being similar bar the top margin
let break1 = document.createElement("hr");
break1.style.color="white";
break1.style.marginTop="-50px";
break1.style.marginLeft="7%";
break1.style.marginRight="7%";
document.body.appendChild(break1);

let break2 = document.createElement("hr");
break2.style.color="white";
break2.style.marginTop="-200px";
break2.style.marginLeft="7%";
break2.style.marginRight="7%";
document.body.appendChild(break2);

//At the bottom of the website is the several social media icons
//The Twitter icon
let icon1=document.createElement("ion-icon");
icon1.name="logo-twitter";
icon1.style.marginTop="25px";
icon1.style.marginLeft="15px";
icon1.style.fontSize="30px";
icon1.style.marginRight="7%";
icon1.style.float="right"
icon1.style.color ="white";
icon1.className= "hover";
icon1.onclick=function(){
  window.location.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
};
document.body.appendChild(icon1)

//The YouTube icon
let icon2=document.createElement("ion-icon");
icon2.name="logo-youtube";
icon2.style.marginTop="25px";
icon2.style.marginLeft="15px";
icon2.style.fontSize="30px";
icon2.style.float="right"
icon2.style.color ="white";
icon2.className= "hover";
icon2.onclick=function(){
  window.location.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
};
document.body.appendChild(icon2)

//The Facebook icon
let icon3=document.createElement("ion-icon");
icon3.name="logo-facebook";
icon3.style.marginTop="25px";
icon3.style.marginLeft="15px";
icon3.style.fontSize="30px";
icon3.style.float="right"
icon3.style.color ="white";
icon3.className= "hover";
icon3.onclick=function(){
  window.location.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
};
document.body.appendChild(icon3)

//The Instagram icon
let icon4=document.createElement("ion-icon");
icon4.name="logo-instagram";
icon4.style.marginTop="25px";
icon4.style.marginLeft="15px";
icon4.style.fontSize="30px";
icon4.style.color ="white";
icon4.style.float="right"
icon4.className= "hover";
icon4.onclick=function(){
  window.location.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
};
document.body.appendChild(icon4)

//The select languages icon 
let icon5=document.createElement("ion-icon");
icon5.name="globe";
icon5.style.marginTop="25px";
icon5.style.marginLeft="15px";
icon5.style.fontSize="30px";
icon5.style.color ="white";
icon5.style.float="right"
icon5.className= "hover";
icon5.onclick=function(){
  window.location.href="https://90d09cee-7f4d-4867-b65d-521da870ab3f-00-2r974y3xdomze.janeway.repl.co/";
};
document.body.appendChild(icon5)


//The hover class is used once again for the icons the same way the buttons at the center were done, mostly done to callback to an id i made previously and reuse it for the hover class
let hover3 = document.getElementsByClassName("hover")[3];

hover3.addEventListener('mouseover', function() {
  hover3.style.backgroundColor = '#CD5C5C';
});

hover3.addEventListener('mouseout', function() {
    hover3.style.backgroundColor = '#3f0000';
});
  
let hover4 = document.getElementsByClassName("hover")[4];

hover4.addEventListener('mouseover', function() {
  hover4.style.backgroundColor = '#CD5C5C';
});

hover4.addEventListener('mouseout', function() {
    hover4.style.backgroundColor = '#3f0000';
});

let hover5 = document.getElementsByClassName("hover")[5];

hover5.addEventListener('mouseover', function() {
  hover5.style.backgroundColor = '#CD5C5C';
});

hover5.addEventListener('mouseout', function() {
    hover5.style.backgroundColor = '#3f0000';
});

let hover6 = document.getElementsByClassName("hover")[6];

hover6.addEventListener('mouseover', function() {
  hover6.style.backgroundColor = '#CD5C5C';
});

hover6.addEventListener('mouseout', function() {
    hover6.style.backgroundColor = '#3f0000';
});

let hover7 = document.getElementsByClassName("hover")[7];

hover7.addEventListener('mouseover', function() {
  hover7.style.backgroundColor = '#CD5C5C';
});

hover7.addEventListener('mouseout', function() {
    hover7.style.backgroundColor = '#3f0000';
});

//The last 2 elements are the copyright and the trademark at the bottom of the page which concludes this code
let bkfo3= document.createElement("h1");
bkfo3.innerText="BURGER KING";
bkfo3.style.float="left";
bkfo3.style.marginLeft="7%";
bkfo3.style.fontSize="30px";
bkfo3.style.color="white";
document.body.appendChild(bkfo3)

let bkfo4= document.createElement("p");
  bkfo4.innerText="TM & Copyright 2021 Burger King Corporation. All Rights Reserved.";
  bkfo4.style.textAlign="left";
  bkfo4.style.marginLeft="7%";
  bkfo4.style.marginTop="100px";
  bkfo4.style.fontSize="15px";
  bkfo4.style.color="grey";
document.body.appendChild(bkfo4)
