let heroInfo = {
    name: "Minh Cường",
    job: "Freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
  };
  
  let personalDetail = {
    name: "Minh Cường",
    dob: "06 June 1995",
    spokenLanguages: ["English", "France", "German"],
    nationality: "Vietnam",
    interest: ["Music", "Reading", "Journey"],
    techs: [
      {
        id: 1,
        imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
        techName: "Android",
        exp: 2,
      },
      {
        id: 2,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        techName: "Angular",
        exp: 1,
      },
      {
        id: 3,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        techName: "Bootstrap",
        exp: 3,
      },
      {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        techName: "Vue",
        exp: 2,
      },
      {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        techName: "React",
        exp: 2 / 3,
      },
      {
        id: 6,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        techName: "Mongodb",
        exp: 0.25,
      },
      {
        id: 7,
        imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
        techName: "Laravel",
        exp: 1,
      },
      {
        id: 8,
        imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
        techName: "Node.js",
        exp: 5 / 6,
      },
    ],
  };
  
  let projects = [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
];
localStorage.setItem("hero", JSON.stringify(heroInfo));
localStorage.setItem("person", JSON.stringify(personalDetail));
localStorage.setItem("projects", JSON.stringify(projects));
JSON.parse(localStorage.getItem("hero"));
let name2 = document.getElementById("name");
let job = document.getElementById("job");
name2.textContent = `${heroInfo.name}`;
job.textContent = `${heroInfo.job}`;
let tex1= document.getElementsByClassName("text1");
let tex2 = document.getElementsByClassName("text2");
let tex3 = document.getElementsByClassName("text3");
let tex4 = document.getElementsByClassName("text4");
text1.textContent = `: ${personalDetail.dob}` ;
text2.textContent = `: ${personalDetail.spokenLanguages}`;
text3.textContent = `: ${personalDetail.nationality}`;
text4.textContent = `: ${personalDetail.interest}`;
localStorage.setItem("techs", JSON.stringify(personalDetail.techs));
let choice = document.getElementsByClassName("choice1");
Array.from(choice).forEach((choiceItem, index) => {
    if (index < personalDetail.techs.length) {
        let tech = personalDetail.techs[index];
        let text = document.createElement("div");
        text.classList.add("text_icon");
        text.innerHTML = `
            <h1>${tech.techName}</h1>
            <p>${tech.exp} Year Experience</p>
        `;
        choiceItem.appendChild(text);
    }
});
let projectItems = document.getElementsByClassName("star1");
Array.from(projectItems).forEach((projectItem, index) => {
    if (index < projects.length) {
        let projectName = projects[index].projectName;
        let link = projects[index].link;
        let linkElement = document.createElement("div");
        linkElement.innerHTML = `
            <h1>${projectName}</h1>
            <p>${link}</p>
            <a href="${link}"><span class="material-symbols-outlined">open_in_new</span></a>
        `;
        projectItem.querySelector(".link").appendChild(linkElement);
        let btnElement = document.createElement("div");
        btnElement.innerHTML = `
            <button>ANGULAR</button>
            <button>REACT</button>
            <button>JAVASCRIPT</button>
        `;
        projectItem.querySelector(".btn_star").appendChild(btnElement);
    }
});








