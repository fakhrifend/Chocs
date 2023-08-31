function validateData(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var product = document.getElementById("product");
    var quantity = document.getElementById("quantity").value;
    var address = document.getElementById("address").value;

    if(name.length <5 || name.length >15){
        alert("Nama harus terdiri dari 5-15 karakter!");
    }
    else if(phone === ""){
        alert("cannot be blank");
    }
    else if(quantity === ""){
        alert("cannot be blank");
    }
    else if(!address.endsWith("street")){
        alert("must end with street");
    }
}

document.getElementById("Submit").addEventListener("click", ()=>{
 validateData();
})