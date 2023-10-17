showdata.addEventListener("click",function(){
  //alert("Data loded.")
  allData();
})

function hi(clicked){

  x=(clicked);
  console.log(x);
}






function allData(){
  document.getElementById("allList").style.visibility ="visible";
  document.getElementById("insert").style.visibility = "hidden";
  document.getElementById("delete").style.visibility = "hidden";
  var xmlhttp = new XMLHttpRequest();
  var url = "https://jsonplaceholder.typicode.com/posts";
  xmlhttp.open('GET',url,true);
  xmlhttp.onload = function(){
    if(this.readyState == 4 && this.status == 200){
      Data = JSON.parse(this.responseText);
      //console.log(Data);
    }
    dataStore = "";
    count=1;
    for (single in Data){
    
     
      dataStore += ` 
      
        <tr>
          <th scope="row">${Data[single].id}</th>
          <td>${Data[single].title}</td>
          <td>${Data[single].body}</td>
          <td><button type=button value="${Data[single].id}" class="del" id="del${Data[single].id}" onclick="hi(this.value)"><span class="material-symbols-outlined">
          delete
          </span></button><button class="update" id="update${Data[single].id}" value="${Data[single].id}" onclick="hi(this.value)"><span class="material-symbols-outlined">
          edit
          </span></button></td>
        </tr>
        <tr>
          </tr>


          `


          count+=1;

    }
all.innerHTML= dataStore;
/*var $cardsContainer = $('#cards-container');
$('#pagination-container').pagination({
  dataSource: dataStore,
  pageSize: 20,
  callback: function(dataStore, pagination) {
    $cardsContainer.html(dataStore);
  }
})*/
  }

  xmlhttp.send();
}
 

function unHide(){
  allList.innerHTML=``;
  document.getElementById("delete").style.visibility = "hidden";
  document.getElementById("insert").style.visibility = "visible";
}

function deleteUnhide(){
  allList.innerHTML=``;
  document.getElementById("allList").style.visibility ="hidden";
  document.getElementById("insert").style.visibility = "hidden";
  
  var delete1 = document.getElementById("delete");
  delete1.style.visibility = "visible";
}

function insertData(){
  
  

  var xmlhttp;
  if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
  }
  // Instantiating the request object
  //xmlhttp.setRequestHeader
  //https://jsonplaceholder.typicode.com/posts
  xmlhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  //xmlhttp.setRequestHeader("accept", "application/json");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // Retrieving the form data
  var myForm = document.getElementById("myForm");
  var formData = new FormData(myForm);
  // Sending the request to the server
  xmlhttp.send(JSON.stringify(Object.fromEntries(formData)));
  // Defining event listener for readystatechange event
  xmlhttp.onreadystatechange = function () {
     
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          InData = JSON.parse(this.responseText);
          console.log(InData);
          IndataStore = "";
        
          IndataStore += `<tr>
          <th scope="row" class="row">${InData.id}</th>
          <td class="row">${InData.name}</td>
          <td class="row">${InData.email}</td>
          <td>delete</td>
        </tr>
        <tr>
          </tr>
    `
       document.getElementById("allList").style.visibility ="visible";
       document.getElementById("all");
         all.innerHTML= IndataStore;

       document.getElementById("insert").style.visibility ="hidden";

      } 
       
  }
  //Fail the onsubmit to avoid page refresh.
  return false;
}

function deleteData(){
  document.getElementById('allList').style.visibility = "hidden";
  document.getElementById("insert").style.visibility = "hidden";
  var xmlhttp;
  if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
  }
  // Instantiating the request object
  //xmlhttp.setRequestHeader
  //https://jsonplaceholder.typicode.com/posts
  var x =  document.getElementById('id1').value;
  console.log(x);
  xmlhttp.open("DELETE", "https://jsonplaceholder.typicode.com/posts/"+x, true);

  //delData = JSON.parse(this.responseText);
  alert("Users Data deleted Successfully.  Click 'OK' button to View deleted Data.")
  //console.log(delData);
  // Defining event listener for readystatechange event
       document.getElementById("allList").style.visibility ="visible";
       document.getElementById("insert").style.visibility ="hidden";
       document.getElementById('delete').style.visibility ="hidden";
       allList.innerHTML=`<h1 id="h1">Data Deleted Successfully.</h1>`;
        xmlhttp.send();
       
  
  //Fail the onsubmit to avoid page refresh.
  return false;
}

