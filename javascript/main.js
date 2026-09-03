let dot = document.querySelector(".dot");

let hero_video = document.querySelector(".hero-video-media");

let arrow = document.querySelector(".arrow");

if (dot) {

    document.addEventListener("mousemove", function(e) {

        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

    });

}

if (hero_video && dot && arrow) {

    hero_video.onmouseenter = function() {

        dot.style.visibility = "hidden";
        arrow.style.visibility = "visible";

    };

    hero_video.onmousemove = function(e) {

        arrow.style.left = e.offsetX + "px";
        arrow.style.top = e.offsetY + "px";

    };

    hero_video.onmouseleave = function() {

        dot.style.visibility = "visible";
        arrow.style.visibility = "hidden";

    };

}

let cart_hero_1 = document.querySelector(".cart-1");
let cart_hero_2 = document.querySelector(".cart-2");
let cart_hero_3 = document.querySelector(".cart-3");
let cart_hero_4 = document.querySelector(".cart-4");
let cart_hero_5 = document.querySelector(".cart-5");

function activeCard(card) {

    let item_description = card.querySelector(".item-description");
    let title = card.querySelector(".h_2par");

    item_description.style.opacity = "1";
    item_description.style.transition = "1s";

    title.style.color = "white";

}

function resetCard(card) {

    let item_description = card.querySelector(".item-description");
    let title = card.querySelector(".h_2par");

    item_description.style.opacity = "0";
    item_description.style.transition = "0.5s";

    title.style.color = "black";
        card.style.height = "130px";
    card.style.background = "#EEEEEE";
    card.style.transition = "1s";

}

if (
    cart_hero_1 &&
    cart_hero_2 &&
    cart_hero_3 &&
    cart_hero_4 &&
    cart_hero_5
) {

    window.onscroll = function() {

        if (scrollY >= 770 && scrollY < 1000) {

            activeCard(cart_hero_1);

            cart_hero_1.style.height = "250px";
            cart_hero_1.style.transition = "1s";

            cart_hero_1.style.background = `linear-gradient(
                to right,
                #000000 0%,
                #000000 55%,
                #030303 55%,
                #030303 61%,
                #0C0C0C 61%,
                #0C0C0C 67%,
                #161616 67%,
                #161616 73%,
                #1D1D1D 73%,
                #1D1D1D 80%,
                #222222 80%,
                #222222 100%
            )`;

        }

        else if (scrollY >= 1000 && scrollY < 1320) {

            activeCard(cart_hero_2);

            cart_hero_2.style.height = "250px";
            cart_hero_2.style.transition = "1s";

            cart_hero_1.style.background = `linear-gradient(
                to right,
                #000000 0%,
                #000000 55%,
                #030303 55%,
                #030303 61%,
                #0C0C0C 61%,
                #0C0C0C 67%,
                #161616 67%,
                #161616 73%,
                #1D1D1D 73%,
                #1D1D1D 80%,
                #222222 80%,
                #222222 100%
            )`;

            cart_hero_2.style.background = `linear-gradient(
                to right,
                #000000 0%,
                #000000 55%,
                #030303 55%,
                #030303 61%,
                #0C0C0C 61%,
                #0C0C0C 67%,
                #161616 67%,
                #161616 73%,
                #1D1D1D 73%,
                #1D1D1D 80%,
                #222222 80%,
                #222222 100%
            )`;

        }

        else if (scrollY >= 1320 && scrollY < 1600) {

            activeCard(cart_hero_3);

            cart_hero_3.style.height = "250px";
            cart_hero_3.style.transition = "1s";

            cart_hero_3.style.background = `linear-gradient(
                to right,
                #000000 0%,
                #000000 55%,
                #030303 55%,
                #030303 61%,
                #0C0C0C 61%,
                #0C0C0C 67%,
                #161616 67%,
                #161616 73%,
                #1D1D1D 73%,
                #1D1D1D 80%,
                #222222 80%,
                #222222 100%
            )`;

        }

        else if (scrollY >= 1600 && scrollY < 1650) {

            activeCard(cart_hero_4);

            cart_hero_4.style.height = "250px";
            cart_hero_4.style.transition = "1s";

            cart_hero_4.style.background = `linear-gradient(
                to right,
                #000000 0%,
                #000000 55%,
                #030303 55%,
                #030303 61%,
                #0C0C0C 61%,
                #0C0C0C 67%,
                #161616 67%,
                #1D1D1D 73%,
                #1D1D1D 80%,
                #222222 80%,
                #222222 100%
            )`;

        }

        else if (scrollY >= 1650) {

            activeCard(cart_hero_5);

            cart_hero_5.style.height = "250px";
            cart_hero_5.style.transition = "1s";

            cart_hero_5.style.background = `linear-gradient(
                to right,
                #000000 0%,
                #000000 55%,
                #030303 55%,
                #030303 61%,
                #0C0C0C 61%,
                #0C0C0C 67%,
                #161616 67%,
                #1D1D1D 73%,
                #1D1D1D 80%,
                #222222 80%,
                #222222 100%
            )`;

        }

        else {

            resetCard(cart_hero_1);
            resetCard(cart_hero_2);
            resetCard(cart_hero_3);
            resetCard(cart_hero_4);
            resetCard(cart_hero_5);

        }

    };

}

let work_section = document.querySelector(".work-section");

let dot_1 = document.querySelector(".dot-1");

if (work_section && dot_1 && dot) {

    work_section.addEventListener("mousemove", function(e) {

        dot_1.style.left = e.clientX + "px";
        dot_1.style.top = e.clientY + "px";

    });

    work_section.onmouseenter = function() {

        dot.style.visibility = "hidden";
        dot_1.style.visibility = "visible";

    };

    work_section.onmouseleave = function() {

        dot_1.style.visibility = "hidden";
        dot.style.visibility = "visible";

    };

}

let video_1 = document.querySelectorAll(".video-1");

if (video_1.length > 0) {

    for (let v = 0; v < video_1.length; v++) {

        video_1[v].addEventListener("mouseenter", function() {

            video_1[v].play();
            video_1[v].currentTime = 0;

        });

        video_1[v].addEventListener("mouseleave", function() {

            video_1[v].pause();

        });

    }

}

let dot_2 = document.querySelector(".dot-2");

let insights = document.querySelector(".insights");

if (insights && dot_2 && dot) {

    insights.addEventListener("mousemove", function(e) {

        dot_2.style.left = e.clientX + "px";
        dot_2.style.top = e.clientY + "px";

    });

    insights.onmouseenter = function() {

        dot.style.visibility = "hidden";
        dot_2.style.visibility = "visible";

    };

    insights.onmouseleave = function() {

        dot_2.style.visibility = "hidden";
        dot.style.visibility = "visible";

    };

}

let dot_3 = document.querySelector(".dot-3");
let dot_4 = document.querySelector(".dot-4");
let services_3 = document.querySelector(".services-3");

if (services_3 && dot_3 && dot_4) {


document.addEventListener("mousemove", function(e) {
    dot_3.style.left = e.clientX + "px";
    dot_3.style.top = e.clientY + "px";
});

services_3.addEventListener("mousemove", function(e) {
    dot_4.style.left = e.clientX + "px";
    dot_4.style.top = e.clientY + "px";
});

services_3.onmouseenter = function() {
    dot_3.style.visibility = "hidden";
    dot_4.style.visibility = "visible";
};

services_3.onmouseleave = function() {
    dot_4.style.visibility = "hidden";
    dot_3.style.visibility = "visible";
};


}

let dot_5 = document.querySelector(".dot-5");

if (dot_5) {

document.addEventListener("mousemove", function(e) {
    dot_5.style.left = e.clientX + "px";
    dot_5.style.top = e.clientY + "px";
});
}
let links = document.querySelectorAll(".link_3-project");
let projects = document.querySelectorAll(".img-project");
for (let a = 0; a < links.length; a++) {
    links[a].onclick = function(e) {
        e.preventDefault();
        let type = links[a].classList[1];
        for (let z = 0; z < projects.length; z++) {
            if (type == "all") {
                projects[z].style.display = "block";
            }
            else if (projects[z].classList.contains(type)) {

                projects[z].style.display = "block";
            }
            else {
                projects[z].style.display = "none";
            }
        }
    };
}

let dotBlog = document.querySelector(".dot-6");

if (dotBlog) {


document.addEventListener("mousemove", function(e) {
    dotBlog.style.left = e.clientX + "px";
    dotBlog.style.top = e.clientY + "px";
});

}
let blog_link=document.querySelectorAll(".link-blog-1 ")
let cart_blog_1=document.querySelectorAll(".cart-blog-1")
for(let q=0;q<blog_link.length;q++){
    blog_link[q].onclick=function(e){
e.preventDefault();
    
  let type1=blog_link[q].classList[1]
    for(let g=0;g<cart_blog_1.length;g++){
        if(type1=="Allpost"){
            cart_blog_1[g].style.display="block";
        }else if(cart_blog_1[g].classList.contains(type1)){
             cart_blog_1[g].style.display="block";
        }else{
             cart_blog_1[g].style.display="none";
        }

    }
}
}
let dot_7=document.querySelector(".dot-7");
if(dot_7){
    document.onmousemove=function(e){
        dot_7.style.left=e.clientX+"px";
        dot_7.style.top=e.clientY+"px"
    }
}