
let property = [
    {
        address: "23 Whitworth Way",
        availability: "2024-03-19",
        contact: "08037299903",
        garage: "yes",
        image: "/images/meetingroom3.jpg",
        leaseTerm: "4 Days",
        neighbourhood: "Whitehorn",
        price: "$500",
        seats: "1",
        smoking: "yes",
        squareFeet: "100km",
        transportation: "true",
        workspace: "Meeting Room",
    },
    {
        address: "23 Whitworth Way",
        availability: "2024-03-19",
        contact: "08037299903",
        garage: "yes",
        image: "/images/meetingroom.jpg",
        leaseTerm: "4 Days",
        neighbourhood: "Whitehorn",
        price: "$500",
        seats: "1",
        smoking: "yes",
        squareFeet: "100km",
        transportation: "true",
        workspace: "Meeting Room",
    },
    {
        address: "23 Whitworth Way",
        availability: "2024-03-19",
        contact: "08037299903",
        garage: "yes",
        image: "/images/meetingroom2.jpg",
        leaseTerm: "4 Days",
        neighbourhood: "Whitehorn",
        price: "$500",
        seats: "1",
        smoking: "yes",
        squareFeet: "100km",
        transportation: "true",
        workspace: "Meeting Room",
    },
    {
        address: "88 Rundledrive",
        availability: "2024-03-20",
        contact: "1111111111",
        garage: "yes",
        image: "/images/openworkarea.jpg",
        leaseTerm: "1 Day",
        neighbourhood: "Rundle",
        price: "$200",
        seats: "2",
        smoking: "no",
        squareFeet: "300km",
        transportation: "false",
        workspace: "Open Work Area",
    },
    {
        address: "No 5 Omoh Street",
        availability: "2024-04-02",
        contact: "2222222222",
        garage: "no",
        image: "/images/privateoffice.jpg",
        leaseTerm: "89 Days",
        neighbourhood: "Nnewichi",
        price: "$400",
        seats: "5",
        smoking: "no",
        squareFeet: "200km",
        transportation: "false",
        workspace: "Private Office Room",
    },
    {
        address: "23 Whitworth Way",
        availability: "2024-03-19",
        contact: "08037299903",
        garage: "yes",
        image: "/images/office.jpg",
        leaseTerm: "4 Days",
        neighbourhood: "Whitehorn",
        price: "$450",
        seats: "1",
        smoking: "yes",
        squareFeet: "100km",
        transportation: "true",
        workspace: "Meeting Room",
    },
    {
        address: "23 Whitworth Way",
        availability: "2024-03-19",
        contact: "08037299903",
        garage: "yes",
        image: "/images/workspace.jpg",
        leaseTerm: "4 Days",
        neighbourhood: "Whitehorn",
        price: "$300",
        seats: "1",
        smoking: "yes",
        squareFeet: "100km",
        transportation: "true",
        workspace: "Meeting Room",
    },
    {
        address: "88 Rundledrive",
        availability: "2024-03-18",
        contact: "1111111111",
        garage: "yes",
        image: "/images/empty office.jpg",
        leaseTerm: "1 Day",
        neighbourhood: "Rundle",
        price: "$100",
        seats: "2",
        smoking: "no",
        squareFeet: "300km",
        transportation: "false",
        workspace: "Open Work Area",
    },
]


// function to sort by price
function sortByPrice(){
    let dataLength = property.length; 
    for (var i=0;i<dataLength;i++){
        property.sort((a,b)=> a.price.localeCompare(b.price) );
        var items_Div = document.querySelectorAll(".items");
        for(var g =0; g < items_Div.length; g++){
            items_Div[g].remove();
        }
        showData();
    
    }
}

// function to sort by date
function sortByDate(){
    let dataLength = property.length; 
    for (var i=0;i<dataLength;i++){
        property.sort((a,b)=> a.availability.localeCompare(b.availability) );
        var items_Div = document.querySelectorAll(".items");
        for(var g =0; g < items_Div.length; g++){
            items_Div[g].remove();
        }
        showData();
    
    }
}


let sortBy =  document.getElementById("sortBy");
sortBy.onchange = () =>{
    if(sortBy.value == "Price"){
        sortByPrice();
    }
    if(sortBy.value == "Date"){
        sortByDate();
    }
}


window.onload = () =>{
    searchContainer.style.display = "block";
    yesOrNo.style.display = "none";
    date.style.display = "none";
    resetSelectElement();
    resetSortBySelect();
    showData();
     slider();
}

// slide animation in page
var slideImg = document.getElementById("slideImg");
var images = new Array(
    "../images/defaultimg1.jpg",
    "../images/defaultimg2.jpg",
    "../images/defaultimg3.jpg",
    "../images/office2.jpg"
);
var len = images.length;
var i = 0;
function slider(){
    if(i > len - 1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',2000);
}


//display data from page
let searchContainer = document.getElementById("search-container");
let yesOrNo = document.getElementById("yesOrNo");
let date = document.getElementById("date");
let content = document.getElementById("content");

function showData(){
for(let i = 0; i < property.length; i++){
    // for(let j = 0; j < property[i].length; j++){
        let div = document.createElement("div");

        div.setAttribute("id", "items");
        div.setAttribute("class", "items");
        div.setAttribute("title", "Click on me to see full details");
        div.setAttribute("onclick", "displayDetails(this)")

        let div1 = document.createElement("div");
        div1.setAttribute("class", "item-details");
        div1.setAttribute("id", "item-details");

        let div2 = document.createElement("div");
        div2.setAttribute("class", "item-details2");
        div2.setAttribute("id", "item-details2");

        // pp for address
        let pp1 = document.createElement("p");
        pp1.setAttribute("class", "address")
        pp1.setAttribute("id", "address")

        //pp for neighbourhood
        let pp2 = document.createElement("p");
        pp2.setAttribute("class", "neighbourhood")
        pp2.setAttribute("id", "neighbourhood")

        // pp for squareFeet
        let pp3 = document.createElement("p");
        pp3.setAttribute("class", "squareFeet")
        pp3.setAttribute("id", "squareFeet")

        // pp for transportation
        let pp4 = document.createElement("p");
        pp4.setAttribute("class", "transportation")
        pp4.setAttribute("id", "transportation")

        //pp for garage
        let pp5 = document.createElement("p");
        pp5.setAttribute("class", "garage")
        pp5.setAttribute("id", "garage")

        // p for workspace
        let p1 = document.createElement("p");
        p1.setAttribute("class", "workspace")
        p1.setAttribute("id", "workspace")

        // p for contact
        let p2 = document.createElement("p");

        // p for lease term
        let p3 = document.createElement("p");
        p3.setAttribute("class", "leaseTerm")
        p3.setAttribute("id", "leaseTerm")

        // p for price
        let p4 = document.createElement("p");
        p4.setAttribute("class", "price")
        p4.setAttribute("id", "price")

        // p for individual seats
        let p5 = document.createElement("p");
        p5.setAttribute("class", "individualSeats")
        p5.setAttribute("id", "individualSeats")

        // p for smoking
        let p6 = document.createElement("p");
        p6.setAttribute("class", "smoking")
        p6.setAttribute("id", "smoking")


        // p for date
        let p7 = document.createElement("p");
        p7.setAttribute("class", "availabilityDate")
        p7.setAttribute("id","availabilityDate")

        let img = document.createElement("img");

        img.src =  property[i].image;
        pp1.innerHTML = "Address: " + property[i].address;
        pp2.innerHTML = "Neighbouhood: " + property[i].neighbourhood;
        pp3.innerHTML = "SquareFeet: " + property[i].squareFeet;
        pp4.innerHTML = "Reachable By Public Transit: " + property[i].transportation;
        pp5.innerHTML = "Garage: " + property[i].garage;

        p1.innerHTML = "WorkSpace: " + property[i].workspace;
        p2.innerHTML = "Contact: " + property[i].contact;
        p3.innerHTML = "Lease Term: " + property[i].leaseTerm;
        p4.innerHTML = "Price: " + property[i].price;
        p5.innerHTML = "Individual Seats: " + property[i].seats;
        p6.innerHTML = "Smoking: " + property[i].smoking;
        p7.innerHTML = "Availability: " + property[i].availability;


        div.appendChild(img);
        // append workspace, address,neighbourhood, leaseterm, price respectively.
        div1.appendChild(p1); 
        div1.appendChild(pp1);
        div1.appendChild(pp2);
        div1.appendChild(p3);
        div1.appendChild(p4);

        // append seats, availability date, squarefeet, garage, smoking,transportation, contact respectively.
        div2.appendChild(p5);
        div2.appendChild(p7);
        div2.appendChild(pp3);
        div2.appendChild(pp5); 
        div2.appendChild(p6);
        div2.appendChild(pp4);
        div2.appendChild(p2);

        // appending all divs
        div1.appendChild(div2)
        div.appendChild(div1);
        
       content.appendChild(div);
}
}
let searchBy = document.getElementById("SearchBy");
let myInput = document.getElementById("myInput");
let dateValue = document.getElementById("dateValue")
// let radioValue = document.querySelector('input[name="yesOrNo"]:checked').value;
let radioDiv = document.getElementById("yesOrNo");
searchBy.onchange = () =>{
    if(searchBy.value == "WorkSpace"){
        searchContainer.style.display = "block";
        yesOrNo.style.display = "none";
        date.style.display = "none";
       myInput.onkeyup = myFunctionWorkSpace;

       let sortBy =  document.getElementById("sortBy");
       sortBy.onchange = () =>{
       if(sortBy.value == "Price"){
           let dataLength = property.length; 
           for (var i=0;i<dataLength;i++){
               property.sort((a,b)=> a.price.localeCompare(b.price) );
               var items_Div = document.querySelectorAll(".items");
               for(var g =0; g < items_Div.length; g++){
                   myFunctionWorkSpace;
               }
               // myFunctionWorkSpace;
            }
           }
       }
    }
    if(searchBy.value == "Address"){
        searchContainer.style.display = "block";
        yesOrNo.style.display = "none";
        date.style.display = "none";
        myInput.onkeyup = myFunctionAddress;

    }
    if(searchBy.value == "Neighbourhood"){
        searchContainer.style.display = "block";
        yesOrNo.style.display = "none";
        date.style.display = "none";
        myInput.onkeyup = myFunctionNeighbourhood;

    }
    if(searchBy.value == "SquareFeet"){
        searchContainer.style.display = "block";
        yesOrNo.style.display = "none";
        date.style.display = "none";
        myInput.onkeyup = myFunctionSquareFeet;

    }
    if(searchBy.value == "Lease Term"){
        searchContainer.style.display = "block";
        yesOrNo.style.display = "none";
        date.style.display = "none";
        myInput.onkeyup = myFunctionLeaseTerm;
    }
    if(searchBy.value == "Price"){
        searchContainer.style.display = "block";
        yesOrNo.style.display = "none";
        date.style.display = "none";
        myInput.onkeyup = myFunctionPrice;
    }
    if(searchBy.value == "Individual Seats"){
        searchContainer.style.display = "block";
        yesOrNo.style.display = "none";
        date.style.display = "none";
        myInput.onkeyup = myFunctionIndividualSeats;
    }
    if(searchBy.value == "Availability Date"){
        searchContainer.style.display = "none";
        yesOrNo.style.display = "none";
        date.style.display = "block";
        dateValue.onkeyup = myFunctionAvailabilityDate;
        dateValue.onchange = myFunctionAvailabilityDate;
    }
    if(searchBy.value == "Smoking"){
        searchContainer.style.display = "none";
        date.style.display = "none";
        yesOrNo.style.display = "block";
        
        let LabelForYes = document.getElementById("LabelForYes");
        LabelForYes.innerHTML = "Yes";
        let yes = document.getElementById("yes");
        yes.value = "Yes";
        let LabelForNo = document.getElementById("LabelForNo");
        LabelForNo.innerHTML = "No";
        let no = document.getElementById("no");
        no.value = "No";
        radioDiv.onclick = myFunctionSmoking;
        radioDiv.onchange = myFunctionSmoking;
    }
    if(searchBy.value == "Transportation"){
        searchContainer.style.display = "none";
        date.style.display = "none";
        yesOrNo.style.display = "block";
        let LabelForYes = document.getElementById("LabelForYes");
        let yes = document.getElementById("yes");
        yes.value = "True";
        LabelForYes.innerHTML = "True";
        let no = document.getElementById("no");
        no.value = "False";
        let LabelForNo = document.getElementById("LabelForNo");
        LabelForNo.innerHTML = "False";
        radioDiv.onclick = myFunctionTransportation;
        radioDiv.onchange = myFunctionTransportation;
    }
    if(searchBy.value == "Garage"){
        searchContainer.style.display = "none";
        date.style.display = "none";
        yesOrNo.style.display = "block";
        let LabelForYes = document.getElementById("LabelForYes");
        LabelForYes.innerHTML = "Yes";
        let yes = document.getElementById("yes");
        yes.value = "Yes";
        let LabelForNo = document.getElementById("LabelForNo");
        LabelForNo.innerHTML = "No";
        let no = document.getElementById("no");
        no.value = "No";
        radioDiv.onclick = myFunctionGarage;
        radioDiv.onchange = myFunctionGarage;
    }


}

//reseting
let reset = document.getElementById("reset");


reset.onclick = () =>{
    searchContainer.style.display = "block";
    yesOrNo.style.display = "none";
    date.style.display = "none";
    resetSelectElement();
    resetSortBySelect();
    location.reload();
}

// getting elements


let myDiv = document.getElementsByClassName("items");
let display = document.getElementById("display");

        function displayDetails(div) {
            var divs = document.querySelectorAll('div');
            divs.forEach(element => {
                element.style.opacity = 0.5;
            });
            
            var display =  document.getElementById("display");
            display.style.display = "block";
            display.style.opacity = 1;
            var imgDetails = div.querySelector('img');
            var details = div.querySelectorAll('p');
            var detailsContent = document.querySelector('.display');
            console.log(imgDetails.src)
            detailsContent.innerHTML = " "
            detailsContent.innerHTML += `<img src="${imgDetails.src}">`
            for(var j = 0; j < details.length; j++){
                detailsContent.innerHTML += `<p>${details[j].textContent}</p>` ;
            }
            detailsContent.innerHTML += `<button onclick="hideDisplay()">Ok</button>`
            // document.querySelector('.details-container').style.display = 'block';
          }

function hideDisplay(){
    var display =  document.getElementById("display");
    display.style.display = "none";
    var divs = document.querySelectorAll('div');
    divs.forEach(element => {
        element.style.opacity = 1;
    })
}

function resetSelectElement(){
    var SearchBy = document.getElementById("SearchBy");
    var options = SearchBy.options;
    for (var i=0, iLen=options.length; i<iLen; i++) {

        if (options[i].value = "selected") {
            SearchBy.selectedIndex = i;
            return;
        }
    }
}

function resetSortBySelect(){
    var sortBy = document.getElementById("sortBy");
    var options = sortBy.options;
    for (var i=0, iLen=options.length; i<iLen; i++) {

        if (options[i].value = "sortBy") {
            sortBy.selectedIndex = i;
            return;
        }
    }
}

// function for type of workspace
const myFunctionWorkSpace = () =>{
    
    const input = document.getElementById("myInput").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("workspace")[0];
        // let price = items[i].getElementsByClassName("price");
        if(match){
            
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
           
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }




    let sortBy =  document.getElementById("sortBy");
    sortBy.onchange = () =>{
    if(sortBy.value == "Price"){
        let dataLength = property.length; 
        for (var i=0;i<dataLength;i++){
            property.sort((a,b)=> a.price.localeCompare(b.price) );
            var items_Div = document.querySelectorAll(".items");
            for(var g =0; g < items_Div.length; g++){
                myFunctionWorkSpace;
            }

        
        }
    }

}
}

// function for address
const myFunctionAddress = () =>{
    const input = document.getElementById("myInput").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("address")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for Neighbourhood
const myFunctionNeighbourhood = () =>{
    const input = document.getElementById("myInput").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("neighbourhood")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }

}

// function for SquareFeet
const myFunctionSquareFeet = () =>{
    const input = document.getElementById("myInput").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("squareFeet")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for lease term
const myFunctionLeaseTerm = () =>{
    const input = document.getElementById("myInput").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("leaseTerm")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for price
const myFunctionPrice = () =>{
    const input = document.getElementById("myInput").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("price")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for individual seats
const myFunctionIndividualSeats = () =>{
    const input = document.getElementById("myInput").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("individualSeats")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for my date
const myFunctionAvailabilityDate = () =>{
    const input = document.getElementById("dateValue").value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("availabilityDate")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for smoking
const myFunctionSmoking = () =>{
    const input = document.querySelector('input[name="yesOrNo"]:checked').value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("smoking")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for transportation
const myFunctionTransportation = () =>{
    const input = document.querySelector('input[name="yesOrNo"]:checked').value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("transportation")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;
           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}

// function for garage
const myFunctionGarage = () =>{
    const input = document.querySelector('input[name="yesOrNo"]:checked').value.toUpperCase();
    const itemsList = document.getElementById("content");
    const items = document.querySelectorAll(".items");
    const workspaceName = itemsList.getElementsByClassName("workspace");
    for(var i = 0; i < workspaceName.length; i++){
        let match = items[i].getElementsByClassName("garage")[0];

        if(match){
           var textValue =  match.textContent || match.innerHTML;

           if(textValue.toUpperCase().indexOf(input) > -1){
            items[i].style.display = "";
           }else{
            items[i].style.display = "none";
           }
        }
    }
}
