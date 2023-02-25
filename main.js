var Fname = document.getElementById("Fname");
var Lname = document.getElementById("Lname");
var Phone = document.getElementById("phone");
var dates = document.getElementById("dates");
var datee = document.getElementById("datee");

var totalPrice = document.getElementById("price");
var img = document.getElementById("imgcar");
var CustomerArray;
// var customerInput=document.getElementById("Search")
var btnAdd=document.getElementById('Add')
var btnUpdate=document.getElementById('Update')

var datatable = document.getElementById("datatable")
var Days
var startDate = new Date(dates.value);
var EndDate = new Date(datee.value);

(function () {
    if (localStorage.getItem('Info') != null) {
        CustomerArray = JSON.parse(localStorage.getItem('Info'))
        setInfo(CustomerArray)
    }
    else {
        CustomerArray = [];
    }
})();


function EndService() {
    var t2 = new Date(dates.value);
    var t1 = new Date(datee.value);




    Days = (t1 - t2) / (24 * 3600 * 1000);

    return Days

}




function getInfo() {
    var infoObject = {
        FullName: Fname.value + Lname.value,
        telPhone: Phone.value,
        StartService: dates.value,
        EndService: datee.value,
        day: EndService(),
        Price: totalPrice.value,
        carImge: img.value
    }



    CustomerArray.push(infoObject);
    localStorage.setItem("Info", JSON.stringify(CustomerArray))
    setInfo(CustomerArray)
    clear();



}

function setInfo(arr) {
    var itemDisply = ``

    for (var i = 0; i < arr.length; i++) {
        itemDisply += `
        <td>#${i + 1}</td>
        <td>${arr[i].FullName}</td>
        <td>${arr[i].telPhone}</td>
        <td>${arr[i].StartService}</td>
        <td id="End">${arr[i].EndService}</td>
        <td>${arr[i].day}</td>
        <td>${arr[i].Price}</td>
        <td><img src="${arr[i].carImge}" alt="" class="rounded-pill" width="200em" id="imgvalue" ></td>
        
        <td><button  onclick="setUpdate(${i})" class="btn btn-outline-warning">Update</button></td>
        <td><button class= "btn btn-outline-danger" onclick="DeleteInfo(${i})">Delete</button></td>
    </tr>
        
        `


    }
    datatable.innerHTML = itemDisply


}


function clear() {
    Fname.value = ""
    Lname.value = ""
    Phone.value = "";
    dates.value = "";
    datee.value = "";
    totalPrice.value = ""
}
function DeleteInfo(index) {

    CustomerArray.splice(index, 1)
    localStorage.setItem('Info', JSON.stringify(CustomerArray))
    setInfo(CustomerArray)

}
function Search(customer) {
    var matched = [];
    for (var i = 0; i < CustomerArray.length; i++) {
        if (CustomerArray[i].FullName.toLowerCase().includes(customer.toLowerCase()) == true) {
            matched.push(CustomerArray[i])
        }
    }
    setInfo(matched)
}


function setUpdate(index)
{
    btnAdd.classList.replace('d-block','d-none')

    btnUpdate.classList.replace('d-none','d-block')
  
    Phone.value =CustomerArray[index].telPhone;
    dates.value = CustomerArray[index].StartService;
    datee.value = CustomerArray[index].EndService;
    totalPrice.value = CustomerArray[index].Price;
}




