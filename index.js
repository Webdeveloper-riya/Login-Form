function validate() {
  event.preventDefault();
  var password = document.getElementById("pass").value;
  var Username = document.getElementById("user").value;
  if (Username == "riya" && password == "123456") {
    // alert("success full !");
    //location.href="./collage website.html";
    //window.location.replace("C:\Users\HP\OneDrive\Desktop\project1\collage website.html");
    window.location.assign("educationwebhome1.html");
  } else {
    window.alert(" invalid");
  }
}
