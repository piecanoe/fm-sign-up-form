document.getElementById('submit').addEventListener('click', checkForBlank);


function checkForBlank (){
    if (document.getElementsByClassName('input').display == "none") {
            document.getElementsByClassName('error') = "block"
            document.getElementsByClassName('input').style.borderColor = "red";
    }else{
        document.getElementsByClassName('error') = "none"
    }
}