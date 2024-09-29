let btn1 = document.querySelector('.btn1');
let theme_btn= document.querySelector('.theme-btn');
let logo = document.querySelector('#theme')
btn1.addEventListener('click',()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        theme_btn.innerText="Light Mode";
        let classes = "fa-solid fa-sun";
        logo.classList.remove("fa-moon");
        logo.classList.add(...classes.split(' '));
    }
    else{
        theme_btn.innerText="Dark Mode";
         let classes = "fa-solid fa-moon";
         logo.classList.remove("fa-sun")
        logo.classList.add(...classes.split(' '));
    }
  })

