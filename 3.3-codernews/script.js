// ----
/////////
///////
const API_key= "4b011b7320235261b725654f93e06bf7";

const baseURL= "https://gnews.io/api/v4";
const path = "/top-headlines";
const query =	`?token=${API_key}`;

const fetchAsync = async () => {
    const url = baseURL + path + query;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data object", data);
    const articles = data.articles;
    const htmlTitleArena = document.getElementById("titleArena");
    const htmlOutput = articles.map((singLeArticel) =>{
        return renderArticel(singLeArticel);
    });
    
    htmlTitleArena.innerHTML = htmlOutput.join("");
    
    return;
};

function renderArticel({title, description, image, source, url}){
    console.log(source);
    return `
    <li id = ${title} class = "new-container">
    <div class = "image-container">
        <image src ="${image} "width = "400px">
    </div>
    <div class = "content-container">
        <h1>${title}</h1>
        <p>${description}</p>
        <h4>By : ${source.name}</h4>
        <a href=${url} target = "_blank"> go to detail </a>
    </div>
    </li>
    `;
}


fetchAsync();



// const fetchData = ()=> {
//     const url = baseURL + path + query;
//  // console.log("this is url i use", url)   
//     const fromFetch = fetch(url);
//     fromFetch
//     .then((success)=>{
//         console.log("haha success get json from url");
//         return success.json();
//     })
//     .then((xxx)=>{
//         console.log("haha success translate json to js");
//         console.log(xxx);
//     });
// };
// fetchData();