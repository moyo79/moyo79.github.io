let contentDivs = document.querySelectorAll(".content div");
let contentTops = [];

for (let i = 0; i < contentDivs.length; i++) {
        
    contentTops.push(contentDivs[i].offsetTop - 1);
}
      
let navItems = document.querySelectorAll(".nav a");
      
for (let i = 0; i < navItems.length; i++) {
        
    navItems[i].addEventListener("click", function(event){
        event.preventDefault(); 
          
        // this.href was being turned into the whole url, not the contents of the attribute
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth", block: "start"});
          
    });
}
      
      
window.addEventListener("scroll", function(event){
        
    contentTops.forEach(function(ct, index){
          
        if (window.scrollY > ct && window.scrollY < contentTops[index + 1]) {
            
            document.querySelector(".highlight").classList.remove("highlight");
            document.querySelector(".nav").children[index].classList.add("highlight");
            
        } else if (window.scrollY + window.innerHeight > document.body.clientHeight) {
            
            document.querySelector(".highlight").classList.remove("highlight");
            
            let navChildren = document.querySelector(".nav").children;
            navChildren[navChildren.length - 1].classList.add("highlight");
        }
    });
    
});