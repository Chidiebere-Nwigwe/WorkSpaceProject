let contentDiv = document.getElementById("content");
let add = document.getElementById("add");
let columns = document.getElementById("columns");
let column1 = document.getElementById("column1");
let column2 = document.getElementById("column2");
let body = document.getElementById("body");

add.onclick = () => {
  if (contentDiv.style.visibility == "visible") {
    contentDiv.style.visibility = "hidden";
  } else {
    contentDiv.style.visibility = "visible";
  }
};

let divClass = 0;
let name = "_divClass";

let array = [];

function showData() {
  let address = document.getElementById("address");
  let neighbourhood = document.getElementById("neighbourhood");
  let squareFeet = document.getElementById("squareFeet");
  divClass++;
  // create div

  let div = document.createElement("div");
  div.setAttribute("class", name + divClass);
  div.setAttribute("id", "propertyDiv");

  // create p and span tag
  let p1 = document.createElement("p");
  let span1 = document.createElement("span");
  span1.setAttribute("id", "Address");
  

  // create image tag
  let image = document.createElement("img");
  image.setAttribute("id", "output");
  image.src = "";
  image.setAttribute("alt", "Image");
  


  // create edit button
  let button = document.createElement("button");
  button.innerHTML = "Edit";
  button.setAttribute("id", "edit");
 


  // create delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.setAttribute("id", "deleteButton");
 


  // create add to workspace button
  let workspaceButton = document.createElement("button");
  workspaceButton.innerHTML = "Rent out Workspace";
  workspaceButton.setAttribute("id", "workspaceButton");
 

  // putting src attribute to image
  let imageSrc = document.getElementById("file");
  image.src = URL.createObjectURL(imageSrc.files[0]);
  div.appendChild(image);

  //address
  p1.innerHTML = "Address:";
  span1.innerHTML = address.value;
  p1.appendChild(span1);
  div.appendChild(p1);
  

  // neighbourhood
  let p2 = document.createElement("p");
  let span2 = document.createElement("span");
  span2.setAttribute("id", "Neighbourhood");
  //p2.setAttribute("class", "neighbourHood");
  //p2.innerHTML = "Neighbourhood:";
  span2.innerHTML = "At " + neighbourhood.value;
  p2.appendChild(span2);
  //div.appendChild(p2);
  div.appendChild(span2);

  // square_feet
  let p3 = document.createElement("p");
  let span3 = document.createElement("span");
  span3.setAttribute("id", "SquareFeet");
 
  //p3.innerHTML = "SquareFeet:";
  span3.innerHTML = squareFeet.value + " sq ft";
  p3.appendChild(span3);
  div.appendChild(p3);
  div.appendChild(span3);
  span3.style.float="right"
  span3.style.backgroundColor="gray"
  span3.style.borderRadius="3px"
  span3.style.padding="8px"
  span3.style.color="white"
  span3.style.top="110px"
  span3.style.left="390px"
  span3.style.position="absolute"



  // garage
  let p4 = document.createElement("p");
  let span4 = document.createElement("span");
  span4.setAttribute("id", "Garage");
  
  p4.innerHTML = "Garage:";
  var ele = document.getElementsByName("garage");
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      span4.innerHTML = " " + ele[i].value;
    }
  }
  p4.appendChild(span4);
  div.appendChild(p4);
  div.appendChild(span4);
  span4.style.float="right"
  span4.style.backgroundColor="rgba(255,255,255,0)"
  span4.style.position="absolute"
  span4.style.paddingRight="200px"
  span4.style.left="260px"
  span4.style.top="54px"
  
 



  // transportation
  let p5 = document.createElement("p");
  let span5 = document.createElement("span");
  span5.setAttribute("id", "Transportation");
  
  p5.innerHTML = "Public Transit:";
  var gar = document.getElementsByName("transportation");
  for (var i = 0; i < gar.length; i++) {
    if (gar[i].checked) {
      span5.innerHTML = " " + gar[i].value;
    }
  }
  p5.appendChild(span5);
  div.appendChild(p5);
  div.appendChild(span5);

  span5.style.backgroundColor="rgba(255,255,255,0)"
  span5.style.float="right"
  span5.style.position="absolute"
  span5.style.paddingRight="200px"
  span5.style.left="300px"
  span5.style.top="78px"
  


  // edit button
  div.appendChild(button);
  let editDiv = document.getElementById("editDiv");
  let editImage = document.getElementById("editImage");
  let editAddress = document.getElementById("editAddress");
  let editNeighbourhood = document.getElementById("editNeighbourhood");
  let editSquareFeet = document.getElementById("editSquareFeet");

  button.onclick = function () {
    contentDiv.style.visibility = "hidden";

    editDiv.style.display = "initial";
    editAddress.value = span1.innerHTML;
    editNeighbourhood.value = span2.innerHTML;
    editSquareFeet.value = span3.innerHTML;
    const file = document.querySelector(".editImage");
    file.value = "";

    let editDone = document.getElementById("editDone");
    editDone.onclick = function () {
      image.src = URL.createObjectURL(editImage.files[0]);
      span1.innerHTML = editAddress.value;
      span2.innerHTML = editNeighbourhood.value;
      span3.innerHTML = editSquareFeet.value;

      var element = document.getElementsByName("editGarage");
      for (var i = 0; i < element.length; i++) {
        if (element[i].checked) {
          span4.innerHTML = " " + element[i].value;
        }
      }

      var garage = document.getElementsByName("editTransportation");
      for (var i = 0; i < garage.length; i++) {
        if (garage[i].checked) {
          span5.innerHTML = " " + garage[i].value;
        }
      }

      editDiv.style.display = "none";
    };
  };
  // delete button
  div.appendChild(deleteButton);
  deleteButton.onclick = () => {
    div.remove();
  };

  // button to add workspace
  div.appendChild(workspaceButton);
  workspaceButton.onclick = () => {
    let workspaceDiv = document.getElementById("workspaceDiv");
    workspaceDiv.style.visibility = "visible";
    workspaceDiv.style.display = "block";
    // getting address, neighbourhood, garage and transportation
    // from propertydiv
    let workspaceAddress = document.getElementById("workspaceAddress");
    let workspaceNeighbourhood = document.getElementById("workspaceNeighbourhood");
    let workspaceSquareFeet = document.getElementById("workspaceSquareFeet");
    let workspaceGarage = document.getElementById("workspaceGarage");
    let workspaceTransportation = document.getElementById("workspaceTransportation");
    workspaceAddress.innerHTML = span1.innerHTML;
    workspaceNeighbourhood.innerHTML = span2.innerHTML;
    workspaceSquareFeet.innerHTML = span3.innerHTML;
    workspaceGarage.innerHTML = span4.innerHTML;
    workspaceTransportation.innerHTML = span5.innerHTML;
  };
  // append div to body
  column1.appendChild(div);

  // changing everything back to default....
  contentDiv.style.visibility = "hidden";
  const file = document.querySelector(".file");
  file.value = "";
  address.value = " ";
  neighbourhood.value = " ";
  neighbourhood.setAttribute("placeholder", "Neighbourhood");
  squareFeet.value = " ";
  squareFeet.setAttribute("placeholder", "SquareFeet");
  document.querySelector('input[name="garage"]:checked').checked = false;
  document.querySelector(
    'input[name="transportation"]:checked'
  ).checked = false;
}

let cancel = document.getElementById("cancel");

// function to cancel adding of property by owner
function cancelAddProperty() {
  contentDiv.style.visibility = "hidden";
}
function cancelEditProperty() {
  editDiv.style.display = "none";
}

// console.log(array)
function showWorkspaceData() {
  let workspaceDivSelect = document.getElementById("workspaceDivSelect");
  let seat = document.getElementById("seat");
  let availabilityDate = document.getElementById("availabilityDate");
  let leaseTerm = document.getElementById("leaseTerm");
  let contact = document.getElementById("contact");
  let price = document.getElementById("price");
  // let address = document.getElementById("")
  let addressvalue = document.getElementById("workspaceAddress");
  let neighbourhoodvalue = document.getElementById("workspaceNeighbourhood");
  let squareFeetvalue = document.getElementById("workspaceSquareFeet");
  let garagevalue = document.getElementById("workspaceGarage");
  let transportationvalue = document.getElementById("workspaceTransportation");

  // create workspace div
  let div = document.createElement("div");
  //  div.setAttribute("class", name + divClass)
  div.setAttribute("id", "workspaceDataDiv");

  // address
  let pp1 = document.createElement("p");
  pp1.innerHTML = "Address: " + addressvalue.textContent;
  div.appendChild(pp1);
  // neighbourhood
  let pp2 = document.createElement("p");
  pp2.innerHTML =  neighbourhoodvalue.textContent;
  div.appendChild(pp2);

  // create p and span tag
  let p1 = document.createElement("p");
  let span1 = document.createElement("span");
  // create image tag
  let image = document.createElement("img");
  image.setAttribute("id", "output");
  image.src = "";
  image.setAttribute("alt", "Image of Workspace");
  // create edit button
  let editWorkspacebutton = document.createElement("button");
  editWorkspacebutton.innerHTML = "Edit";
  editWorkspacebutton.setAttribute("id", "editWorkspace");
  // create delete button
  let editWorkspaceDeleteButton = document.createElement("button");
  editWorkspaceDeleteButton.innerHTML = "Delete";
  editWorkspaceDeleteButton.setAttribute("id", "deleteWorkspace");

  // putting src attribute to image
  let imageSrc = document.getElementById("workspaceImage");
  image.src = URL.createObjectURL(imageSrc.files[0]);
  div.appendChild(image);

  // type of workspace
  p1.innerHTML = "Workspace: ";
  span1.innerHTML = workspaceDivSelect.value;
  p1.appendChild(span1);
  div.appendChild(p1);

  //number of seats
  let p2 = document.createElement("p");
  let span2 = document.createElement("span");
  p2.innerHTML = "Number of Seats: ";
  span2.innerHTML = seat.value;
  p2.appendChild(span2);
  div.appendChild(p2);

  // is smoking allowed?
  let p3 = document.createElement("p");
  let span3 = document.createElement("span");
  p3.innerHTML = "Is Smoking Allowed: ";
  var ele = document.getElementsByName("smoking");
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      span3.innerHTML = ele[i].value;
    }
  }
  p3.appendChild(span3);
  div.appendChild(p3);

  //availability date
  let p4 = document.createElement("p");
  let span4 = document.createElement("span");
  p4.innerHTML = "Availability Date: ";
  span4.innerHTML = availabilityDate.value;
  p4.appendChild(span4);
  div.appendChild(p4);

  //lease Term
  let p5 = document.createElement("p");
  let span5 = document.createElement("span");
  p5.innerHTML = "Lease Term: ";
  span5.innerHTML = leaseTerm.value;
  p5.appendChild(span5);
  div.appendChild(p5);

  //Contact Number
  let p6 = document.createElement("p");
  let span6 = document.createElement("span");
  p6.innerHTML = "Contact: ";
  span6.innerHTML = contact.value;
  p6.appendChild(span6);
  div.appendChild(p6);

  // Price
  let p7 = document.createElement("p");
  let span7 = document.createElement("span");
  //p7.innerHTML = "Price: ";
  span7.innerHTML = "$" + price.value;
  p7.appendChild(span7);
  div.appendChild(p7);
  span7.style.position="absolute";
  span7.style.top="150px";
  span7.style.left="420px";
  span7.style.background="gray";
  span7.style.padding="8px";
  span7.style.color="white";
  span7.style.borderRadius="3px"

  // edit button
  div.appendChild(editWorkspacebutton);
  let editWorkspaceDiv = document.getElementById("editWorkspaceDiv");
  let editWorkspaceImage = document.getElementById("editWorkspaceImage");
  let editWorkspaceDivSelect = document.getElementById(
    "editWorkspaceDivSelect"
  );
  let editSeat = document.getElementById("editSeat");
  let editAvailabilityDate = document.getElementById("editAvailabilityDate");
  let editLeaseTerm = document.getElementById("editLeaseTerm");
  let editContact = document.getElementById("editContact");
  let editPrice = document.getElementById("editPrice");

  editWorkspacebutton.onclick = function () {
    // workspaceDataDiv.style.visibility = "hidden";
    reseteditworkspaceDivSelect();
    editWorkspaceDiv.style.visibility = "visible";
    // document.querySelector('input[name="editSmoking"]:checked').checked = false;
    editSeat.value = span2.innerHTML;
    editAvailabilityDate.value = span4.innerHTML;
    editLeaseTerm.value = span5.innerHTML;
    editContact.value = span6.innerHTML;
    editPrice.value = span7.innerHTML;

    const file = document.querySelector(".editWorkspaceImage");
    file.value = "";

    let editWorkSpaceOk = document.getElementById("editWorkSpaceOk");
    editWorkSpaceOk.onclick = function () {
      console.log("a")
      image.src = URL.createObjectURL(editWorkspaceImage.files[0]);
      span1.innerHTML = editWorkspaceDivSelect.value;
      span2.innerHTML = editSeat.value;
      span4.innerHTML = editAvailabilityDate.value;
      span5.innerHTML = editLeaseTerm.value;
      span6.innerHTML = editContact.value;
      span7.innerHTML = editPrice.value;

      var element = document.getElementsByName("editSmoking");
      for (var i = 0; i < element.length; i++) {
        if (element[i].checked) {
          span3.innerHTML = " " + element[i].value;
        }
      }
  
      editWorkspaceDiv.style.visibility = "hidden";
    };
  };
  // delete button
  div.appendChild(editWorkspaceDeleteButton);
  editWorkspaceDeleteButton.onclick = () => {
    div.remove();
  };

  // an  array of objects storing information of workspaces
  let property = new Object();
  // property.ppp = para;
  property.address = addressvalue.textContent;
  property.neighbourhood = neighbourhoodvalue.textContent;
  property.squareFeet = squareFeetvalue.textContent;
  property.garage = garagevalue.textContent;
  property.transportation = transportationvalue.textContent;
  property.image = URL.createObjectURL(imageSrc.files[0]);
  property.workspace = workspaceDivSelect.value;
  property.seats = seat.value;
  property.smoking = span3.innerHTML;
  property.availability = availabilityDate.value;
  property.leaseTerm = leaseTerm.value;
  property.contact = contact.value;
  property.price = price.value;
  array.push(property);

  column2.appendChild(div);

  //        // changing everything back to default....
  let workspaceDiv = document.getElementById("workspaceDiv");
  workspaceDiv.style.visibility = "hidden";
  workspaceDiv.style.display = "none";
  const file = document.querySelector(".workspaceImage");
  file.value = "";
  workspaceDivSelect.value = " ";
  seat.value = " ";
  availabilityDate.value = " ";
  leaseTerm.value = " ";
  contact.value = " ";
  price.value = " ";

  resetworkspaceDivSelect();
  document.querySelector('input[name="smoking"]:checked').checked = false;
}

// function to cancel editing of property
function cancelEditWorkspaceProperty() {
  let editWorkspaceDiv = document.getElementById("editWorkspaceDiv");
  editWorkspaceDiv.style.visibility = "hidden";
}

// cancel adding workspace
function cancelshowWorkspaceData() {
  let workspaceDiv = document.getElementById("workspaceDiv");
  workspaceDiv.style.visibility = "hidden";
  workspaceDiv.style.display = "none";
}

// reseting
function resetworkspaceDivSelect() {
  var workspaceDivSelect = document.getElementById("workspaceDivSelect");
  for (var j = 0; j < workspaceDivSelect.options.length; j++) {
    var opt = workspaceDivSelect.options[j];

    if (opt.value == "Select Workspace") {
      opt.selected = true;
      return;
    }
  }
}

function reseteditworkspaceDivSelect() {
  let editWorkspaceDiv = document.getElementById("editWorkspaceDiv");
  let editWorkspaceImage = document.getElementById("editWorkspaceImage");
  let editWorkspaceDivSelect = document.getElementById(
    "editWorkspaceDivSelect"
  );
  let editSeat = document.getElementById("editSeat");
  let editAvailabilityDate = document.getElementById("editAvailabilityDate");
  let editLeaseTerm = document.getElementById("editLeaseTerm");
  let editContact = document.getElementById("editContact");
  let editPrice = document.getElementById("editPrice");

  // var workspaceDivSelect = document.getElementById("editWorkspaceDivSelect");
  for (var j = 0; j < editWorkspaceDivSelect.options.length; j++) {
    var opt = editWorkspaceDivSelect.options[j];

    if (opt.value == "Select Workspace") {
      opt.selected = true;
      return;
    }
  }
  document.querySelector('input[name="editSmoking"]:checked').checked = false;
  editSeat.innerHTML = " ";
  editAvailabilityDate.innerHTML = " ";
  editLeaseTerm.innerHTML = " ";
  editContact.innerHTML = " ";
  editPrice.innerHTML = " ";

}
window.onload = () => {
  reseteditworkspaceDivSelect()
}