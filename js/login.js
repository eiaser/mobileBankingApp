document.getElementById('loginButton').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;
    if(phoneNumber === '1' && pinNumber === '1'){
        window.location.href = "/home.html";
    }
    else{
        alert("wrong credential");
    }

    
    
});