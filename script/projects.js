const projectContainer = document.getElementById('projectContainer');

const projList = 
[
    {
        id: '',
        position: ``,
        img: `images/portfolio (Small).png`,
        web: ``,
        url: `https://github.com/4fort/Portfolio`,
        target: `_blank`,
        icon: `bi bi-globe`,
        title: `My FORTfolio`,
        desc: `A web-based portfolio built with Bootstrap for a responsive design on various screen sizes. Made with love by me.`,
        techs: `HTML, CSS, JS, Bootstrap 5.2, SASS`
    },
    {
        id: '',
        position: ``,
        img: `images/school (Custom).png`,
        web: `https://4fort.github.io/taclobonationahighscool/`,
        url: `https://github.com/4fort/taclobonationahighscool`,
        target: `_blank`,
        icon: `bi bi-globe`,
        title: `School Website (unfinished)`,
        desc: `This Website is a school activity that was tasked to us ICT students. Unfortunately due to the pandemic i wasn't able to finish this.`,
        techs: `HTML, CSS, JS, jQuery`
    },
    {
        id: '',
        position: ``,
        img: `images/sinigang (Custom).png`,
        web: `https://4fort.github.io/sini-gang/`,
        url: `https://github.com/4fort/sini-gang`,
        target: `_blank`,
        icon: `bi bi-globe`,
        title: `Sini-gang`,
        desc: `A restaurant website I made to practice Bootstrap.`,
        techs: `HTML, CSS, JS, Bootstrap 5.2`
    },
    {
        id: '',
        position: ``,
        img: `images/loginsystem (Custom).png`,
        web: ``,
        url: `https://github.com/4fort/Login-System`,
        target: `_blank`,
        icon: `bi bi-hdd-stack`,
        title: `PHP Login System`,
        desc: `A login system I made with PHP and XAMPP. This is only a project I made to learn PHP.`,
        techs: `PHP, Apache, MySQL`
    },
    {
        id: '',
        position: ``,
        img: `images/weatherandclock (Custom).png`,
        web: ``,
        url: `https://github.com/4fort/ClockAndWeather`,
        target: `_blank`,
        icon: `bi bi-globe`,
        title: `Clock and Weather`,
        desc: `A clock and weather widget with apple macOS ui like design.`,
        techs: `HTML, CSS, JS, openWeather API`
    },
    {
        id: '',
        position: ``,
        img: `images/github (Custom).png`,
        web: ``,
        url: `https://github.com/4fort`,
        target: ``,
        icon: `bi bi-folder2`,
        title: `More coming soon...`,
        desc: `I will be adding more of my future projects here soon as I lost some of the ones I made before due to constant reformatting of my pc.`,
        techs: `HTML, CSS, JS, Bootstrap 5.2`
    },
];

const projLength = projList.length - 1;
const project_id = document.querySelectorAll('.project_id');
for(let i = 0; i <= projLength; i++) {
    if(i.toString().length == 1) projList[i].id = '0' + i;
    
    if(i % 2 !=0){
        projList[i].position = 'flex-row-reverse leftHidden';

        project_id.forEach(e => {
            e.style.right = '-20px';
        })
    }
    else{
        projList[i].position = 'left rightHidden';
        
        project_id.forEach(e => {
            e.style.left = '-80px';
        })
    }
    
}

// console.log(projList[1].web);
const projectWebButton = document.getElementsByClassName('project_webButton');

const projectDisplay = () => {
    // Array.from(projectWebButton).forEach(el => {
    //     console.log(el);
    //     el.style.display = 'none';
    // })
    
    projList.forEach(e => {

        projectContainer.innerHTML += `
        <div class="projectCard d-md-flex justify-content-center gap-3 ${e.position}">
            <span class="project_id ${e.position}">${e.id}</span>
            <div class="projectImage flex-shrink-0">
                <img src="${e.img}" width="684" height="355" alt="">
            </div>
            <div class="projectInfo flex-grow-1 mx-1">
                <h2 class="project_title">${e.title}</h2>
                <div class="project_desc">${e.desc}</div>
                <div class="project_button d-flex align-items-center gap-2">
                    <a href="${e.web}" target="${e.target}" class="project_webButton">
                        <i class="${e.icon} pe-2"></i>
                        Website
                    </a>
                    <a href="${e.url}" target="${e.target}" class="project_githubButton">
                        <i class="bi bi-github pe-2"></i>
                        Github
                    </a>
                </div>
                <span class="project_techs font-monospace">${e.techs}</span>
                </div>
            </div>
        </div>
        `;
    });

}
projectDisplay();