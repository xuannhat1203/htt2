let ip1 = document.getElementById("ip1");
let ip2 = document.getElementById("ip2");
let ip3 = document.getElementById("ip3");
let ip4 = document.getElementById("ip4");
let show = document.getElementById("show");
let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
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
let array = [
    {
        id: 1,
        name:" Auto Drive Project",
        img: `https://cplusplus.com`,
        link:`https://cplusplus.com`,
        tag: `
            <button>Angular</button>
            <button>React</button>
            <button>Jquery</button>
            `,
        button:
        `
            <button>Delete</button>
            <button>Update</button>
        `
    },
    {
        id: 2,
        name:"Ecommerce Project",
        img: `https://cplusplus.com`,
        link:`https://cplusplus.com`,
        tag: `
            <button>Angular</button>
            <button>React</button>
            <button>Jquery</button>
            `,
        button:
        `
            <button id="del">Delete</button>
            <button id="update">Update</button>
        `
    },
    {
        id: 3,
        name:" Chat Application",
        img: `https://cplusplus.com`,
        link:`https://cplusplus.com`,
        tag: `
            <button>Angular</button>
            <button>React</button>
            <button>Jquery</button>
            `,
        button:
        `
            <button>Delete</button>
            <button>Update</button>
        `
    },
    {
        id: 4,
        name:" Social media Platform",
        img: `https://cplusplus.com`,
        link:`https://cplusplus.com`,
        tag: `
            <button>Angular</button>
            <button>React</button>
            <button>Jquery</button>
            `,
        button:
        `
            <button>Delete</button>
            <button>Update</button>
        `
    },
    {
        id: 5,
        name:" Image Sharing Platform",
        img: `https://cplusplus.com`,
        link:`https://cplusplus.com`,
        tag: `
            <button>Angular</button>
            <button>React</button>
            <button>Jquery</button>
            `,
        button:
        `
            <button>Delete</button>
            <button>Update</button>
        `
    },
];
localStorage.setItem('personalDetail', JSON.stringify(personalDetail));
localStorage.setItem('array', JSON.stringify(array));
localStorage.setItem('heroInfo', JSON.stringify(heroInfo));
localStorage.getItem('personalDetail', JSON.parse(personalDetail));
localStorage.getItem('array', JSON.parse(array));
localStorage.getItem('heroInfo', JSON.parse(heroInfo));
let header = document.getElementById("text");
let li = document.createElement("li");
li.innerHTML = `
        <h3 id"h3">${heroInfo.name}</h3>
        <h1>${heroInfo.job}</h1>
        `;
header.appendChild(li);
let button = document.createElement("button");
button.innerHTML = "DOWNLOAD CV";
header.appendChild(button);
ip1.value = personalDetail.dob;
ip4.value = personalDetail.spokenLanguages;
ip2.value = personalDetail.nationality;
ip3.value = personalDetail.interest;
let renderTechs = () => {
    let techListElement = document.querySelector("#ss2 .top");
    let techListElement1 = document.querySelector("#ss2 .bot");
    personalDetailLocal.techs.forEach((tech, index) => {
        let techItem = document.createElement('div');
        techItem.className = 'item1';
        techItem.innerHTML = `
            <div class="icon">
                <img src="${tech.imgUrl}" width="150px" height="110px">
            </div>
            <div class="content">
                <h3>${tech.techName}</h3>
                <p>${tech.exp} Years Experience</p>
            </div>`;
        if (index < 5) {
            techListElement.appendChild(techItem);
        } else {
            techListElement1.appendChild(techItem);
        }
    });
};
let item = document.createElement("div");
item.className = "item";
let itemLeft = document.createElement("div");
itemLeft.className = "item_left";
let img = document.createElement("img");
img.src = array[i].img;
itemLeft.appendChild(img);
let itemRight = document.createElement("div");
itemRight.className = "item_right";
let name = document.createElement("h3");
name.textContent = array[i].name;
let link = document.createElement("a");
link.href = array[i].link;
link.textContent = array[i].link;
let span = document.createElement("span");
span.className = "material-symbols-outlined";
span.textContent = "open_in_new";
itemRight.appendChild(name);
itemRight.appendChild(link);
itemRight.appendChild(span);
item.appendChild(itemLeft);
item.appendChild(itemRight);
item_top.appendChild(item);








