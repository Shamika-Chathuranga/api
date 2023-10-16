showdata.addEventListener("click",function(){
  //alert("Data loded.")
  allData();
})





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
      alert("Users Data Loaded Successfully.  Click 'OK' button to View Data.")
      //console.log(Data);
    }
    dataStore = "";
    for (single in Data){
      dataStore += ` <div id="loadData" class="col-3">
      <div class="card text-white bg-success mb-3">
          <div class="card-body">
              <p><strong> ID: </strong> ${Data[single].id}</p>
              <span><strong>Title: </strong>${Data[single].title}</span><br><br>
              <span><strong>Body: </strong>${Data[single].body}</span>
          </div>
      </div>
  </div>
`
    }
allList.innerHTML= dataStore;
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
          alert("Users Data Inserted Successfully.  Click 'OK' button to View Inserted Data.")
          console.log(InData);
          IndataStore = "";
        
          IndataStore += ` <div class="col-3">
          <h2>This is New Inserted Data Element.</h2>
          <div class="card text-white bg-success mb-3">
              <div class="card-body">
                  <p><strong> ID: </strong> ${InData.id}</p>
                  <span><strong>Title: </strong>${InData.name}</span><br><br>
                  <span><strong>Body: </strong>${InData.email}</span>
              </div>
          </div>
      </div>
    `
    document.getElementById("allList").style.visibility ="visible";
        allList.innerHTML= IndataStore;

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

