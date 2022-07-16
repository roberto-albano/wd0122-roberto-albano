/* ******************************* Animazione testo *************************/
var typed = new Typed(".typing",{
    strings:["","Junior Web Developer","Personal Trainer","Gamer","Nerd"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ******************************* Aside *************************/
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++)
        {
            const a= navList[i].querySelector("a");
            a.addEventListener("click", function()
            {
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.remove("back-section");
                } 
                for(let R=0; R<totalNavList; R++)
                {
                    if(navList[R].querySelector("a").classList.contains("active"))
                    {
                       allSection[R].classList.add("back-section");
                    }
                    navList[R].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this)
                if(window.innerWidth < 1200)
                {
                    asideSectionTogglerBtn();
                }
            })
        }
        function showSection(element)
        {
            /*console.log(element.getAttribute("href").split("#"))*/
            /*target = href[1];*/
            /*console.log(target)*/
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("active");
            }
            function updateNav(element)
            {
                for(let i=0; i<totalNavList; i++)
                {
                    navList[i].querySelector("a").classList.remove("active");
                    const target = element.getAttribute("href").split('#')[1];
                    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                        navList[i].querySelector("a").classList.add("active");
                    }
                }
            }
            document.querySelector(".hire-me").addEventListener("click", function()
            {
                const sectionIndex = this.getAttribute("date-section-index");
                showSection(this);
                updateNav(this);
            })
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
            }
            const navTogglerBtn = document.querySelector(".nav-toggler"),
                    aside = document.querySelector(".aside");
                    navTogglerBtn.addEventListener("click", () => 
                    {
                        asideSectionTogglerBtn();
                    })
                    function asideSectionTogglerBtn()
                    {
                        aside.classList.toggle("open");
                        navTogglerBtn.classList.toggle("open");
                        for(let i=0; i<totalSection; i++ )
                        {
                            allSection[i].classList.toggle("open");
                        }
                    }
