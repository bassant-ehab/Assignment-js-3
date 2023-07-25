var bookmarkNameInput = document.getElementById('bookmarkName')
var bookmarkUrlInput = document.getElementById('bookmarkUrl')
var bookMarkContainer=[]


function addbookmark(){
    var bookMark={
        webSite: bookmarkNameInput.value,
        url: bookmarkUrlInput.value,

    }
    bookMarkContainer .push(bookMark)
    //console.log(bookMarkContainer)
    setLocal()
    displayData();
}

function displayData(){
    var box='';
    for (var i=0;i<bookMarkContainer.length;i++){
        box+=` <tr>
        <td>${i}</td>
        <td>${bookMarkContainer[i].webSite}</td>
        <td><button onclick="visitBookmark(${i})" class="btn  btn-outline-success"><i class="bi bi-eye"></i> Visit</button></td>
        <td><button onclick="deleteBookmark(${i})" class="btn btn-outline-danger"><i class="bi bi-trash"></i> Delete</button> </td>
    </tr>`
    }
    document.getElementById('tableData').innerHTML=box
   
}

function setLocal(){
    localStorage.setItem("bookMark",JSON.stringify(bookMarkContainer))
}

var bookMarkContainer=[]
if(localStorage.getItem("bookMark") !=null){
    bookMarkContainer=JSON.parse(localStorage.getItem("bookMark"))
    displayData()
}

function deleteBookmark(index){
    bookMarkContainer.splice(index,1)
    setLocal();
    displayData();
}

function visitBookmark(){

}
