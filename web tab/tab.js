let tabs = document.querySelectorAll('.tab-btn');
let tab_contents = document.querySelectorAll('.content');

tabs.forEach((tab,index)=>{
    console.log(tab);
    tab.addEventListener("click",(e)=>{
    for(tab of tabs){
    tab.classList.remove("active");
    }
    e.target.classList.add("active");
        
    tab_contents.forEach((content, cont_index)=>{
        content.style.display = "none";
        if(index === cont_index){
            content.style.display = "block";
        }
    })    
    })
});