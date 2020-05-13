

//var projectTitle= new Object();
//projectTitle.name = "Project Title";
//projectTitle.category = "Category";
//projectTitle.year = "Year";
//projectTitle.thumbnail= "..imgs/project-thumbnails/projectTitle.img";
//projectTitle.link = "..Projects/2020/Folder/project.html"

//Categories -

var ChemPal= new Object();
ChemPal.name = "ChemPal ";
ChemPal.category = ["AR/VR/UX/UI"];
ChemPal.year = "2019";
ChemPal.thumbnail= "Projects/2020/ChemPal/thumbnail.png";
ChemPal.link = "Projects/2020/ChemPal/ChemPal.html";

var HPSmart= new Object();
HPSmart.name = "HP Smart";
HPSmart.category = ["AR/VR/UX/UI", "PPT"];
HPSmart.year = "2019";
HPSmart.thumbnail="Projects/2020/HPSmart/thumbnail.png";
HPSmart.link = "Projects/2020/HPSmart/HPSmart.html";

var DigPainting= new Object();
DigPainting.name = "Digital Painting Recreation";
DigPainting.category = ["Misc"];
DigPainting.year = "2018";
DigPainting.thumbnail= "Projects/2020/DigPainting/thumbnail.jpg";
DigPainting.link = "Projects/2020/DigPainting/DigPainting.html";

var projects = [ChemPal, HPSmart, DigPainting];
var projectsSort = [ChemPal, HPSmart, DigPainting];

function displayProjects(arrayOfProjects){
    var counter = 0;
    var length = arrayOfProjects.length;
    var print = "";

    document.getElementById("project-cards").innerHTML="";
    for (i in arrayOfProjects) {
        if (counter % 2 == 0) {
            print += '<div class="row mx-auto">';
            console.log("opening")
        }
        console.log("printing project")
        print +=
            '<div class="col-sm-6"><div class="card border-0" style="padding: 10px;"> <a href="' + arrayOfProjects[i].link + '"><img class="card-img-top" src = "' + arrayOfProjects[i].thumbnail + '"></a></div></div>';

        if (counter % 2 == 1 || counter == (length - 1)){
            print += '</div>';
            console.log("closing")
        }

        counter++;
    }

    document.getElementById("project-cards").innerHTML = print;
}

function allSort(){
    displayProjects(projects);
}

function arvrSort(){
    var printArray = [];
    for (i in projects){
        for (x in projects[i].category){
            if (projects[i].category[x] == "AR/VR/UX/UI"){
                printArray.push(projects[i]);
            }
        }
    }
    displayProjects(printArray);
}

function presentationsSort(){
    var printArray = [];
    for (i in projects){
        for (x in projects[i].category){
            if (projects[i].category[x] == "PPT"){
                printArray.push(projects[i]);
            }
        }
    }
    displayProjects(printArray);
}

function miscSort(){
    var printArray = [];
    for (i in projects){
        for (x in projects[i].category){
            if (projects[i].category[x] == "Misc"){
                printArray.push(projects[i]);
            }
        }
    }
    displayProjects(printArray);
}

displayProjects(projects);