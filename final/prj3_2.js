let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch(`../final/projects.json`)
    .then(response =>{
        return response.json();
    }).then(projects => {
        proj = projects;
        findProjectinJSON(projects);
        // parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function findProjectinJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}

function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<div class= "title"><h1>${project.name}</h1></div>
    <div class = "subtitle" <h3>${project.subtitle}</h3></div><div class= "description"><p>${project.abstract}</p></div>`;
}


