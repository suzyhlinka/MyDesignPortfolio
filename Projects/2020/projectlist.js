

//var projectTitle= new Object();
//projectTitle.name = "Project Title";
//projectTitle.category = "Category";
//projectTitle.year = "Year";
//projectTitle.thumbnail= "..imgs/project-thumbnails/projectTitle.img";
//projectTitle.link = "..Projects/2020/Folder/project.html"

//Categories -

var ChemPal= new Object();
ChemPal.name = "ChemPal ";
ChemPal.category = "AR/VR/UX/UI";
ChemPal.year = "2019";
ChemPal.thumbnail= "ChemPal/thumbnail.png";
ChemPal.link = "ChemPal/ChemPalPage.html";

var HPSmart= new Object();
HPSmart.name = "HP Smart";
HPSmart.category = "AR/VR/UX/UI", "PPT";
HPSmart.year = "2019";
HPSmart.thumbnail="HP/thumbnail.png"
HPSmart.link = "HP/HPProject.html"

var DigPainting= new Object();
DigPainting.name = "Digital Painting Recreation";
DigPainting.category = "Misc";
DigPainting.year = "2018";
DigPainting.thumbnail= "DigPainting/thumbnail.png";
DigPainting.link = "DigPainting/DigPainting.html";

var items = [ChemPal, HPSmart, DigPainting];
var itemsSort = [ChemPal, HPSmart, DigPainting];

function displayItems(arrayOfItems){

    document.getElementById("content-contain").innerHTML="";
    for (i in arrayOfItems){
        document.getElementById("content-contain").innerHTML +=
            '<div class = "card"> <a href="productPage.html"><div class = "item-description">' + arrayOfItems[i].name + '</div><img class="item-img" src = "' + arrayOfItems[i].url + '"><div class="item-description">$' +  arrayOfItems[i].price + '</div></a></div>';
    }
}
