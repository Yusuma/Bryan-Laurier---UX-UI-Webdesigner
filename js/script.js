
/*-------------- Page Loader ----------------*/
window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*loader*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "none";
    },600);
});

/*-------------- Toggle Navbar ----------------*/
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*-------------- Active Section ----------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //activate the overlay toi prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});

/*-------------- About Tabs ----------------*/
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
       tabsContainer.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const target = e.target.getAttribute("data-target");
       aboutSection.querySelector(".tab-content.active").classList.remove("active");
       aboutSection.querySelector(target).classList.add("active");
    }
});

/*-------------- portoflio Item Details Popup ----------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        toggleportoflioPopup();
        document.querySelector(".portoflio-popup").scrollTo(0,0);
        portoflioItemDetails(e.target.parentElement);
    }
})

function toggleportoflioPopup(){
    document.querySelector(".portoflio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", toggleportoflioPopup);

//hide popup when clicking outside of it
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("pp-inner")){
        toggleportoflioPopup();
    }
});

function portoflioItemDetails(portoflioItem){
    document.querySelector(".pp-thumbnail img").src =
    portoflioItem.querySelector(".portoflio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portoflioItem.querySelector(".portoflio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portoflioItem.querySelector(".portoflio-item-details").innerHTML;
    
}
