let nameNode=document.getElementById('name');
let emailNode=document.getElementById('emailid');
let teleNode=document.getElementById('mobile');
let passNode=document.getElementById('pass');
let cpassNode=document.getElementById('c_pass');

let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');
let errorNode4=document.getElementById('error4');
let errorNode5=document.getElementById('error5');

const errorBorder="2px solid red";
const successBorder="2px solid green";

function validateForm(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();
    let s4=validate4();
    let s5=validate5();

    return (s1 &&s2 &&s3 &&s4 &&s5);
}

function validate1(){
    let name=nameNode.value;
    errorNode1.innerHTML="";
    if(name===''){
        errorNode1.innerHTML=" Name is required";
        nameNode.style.border=errorBorder;
        return false;
    }
    else{
        nameNode.style.border=successBorder;
        return true;
    }
}

function validate2(){
    let emailName=emailNode.value;
    errorNode2.innerHTML="";
    let ss1=emailName.substring(0,emailName.indexOf('@'));
    let ss2=emailName.substring(emailName.indexOf('@')+1);
    console.log(ss1);
    console.log(ss2);
    if(emailName===''){
        errorNode.innerHTML="email is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!emailName.includes('@')){
        errorNode2.innerHTML="@ is required";
        emailNode.style.border=errorBorder;
        return false;

    }else if(ss1===''|| ss2===''){
        errorNode2.innerHTML="Invalid email id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
}

function validate3(){
    let mobile=teleNode.value;
    let regExp = new RegExp("^[0-9]{10}$");
    errorNode3.innerHTML="";
    console.log(regExp.test(mobile));
    if(mobile===''){
        errorNode3.innerHTML="Age is not required";
        teleNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode3.innerHTML="Please enter mobile number which is valid";
        teleNode.style.border=errorBorder;
        return false;
    }
    else{
        teleNode.style.border=successBorder;
        return true;
    }
}

function validate4(){
    let pass=passNode.value;
    errorNode4.innerHTML="";
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    if(pass===''){
        errorNode4.innerHTML="password is required";
        passNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(pass)==false){
            errorNode4.innerHTML="Please enter password which is valid";
            passNode.style.border=errorBorder;
            return false;
    }
    else{
        passNode.style.border=successBorder;
        return true;
    }
}

function validate5(){
    let pass=passNode.value; 
    let cpass=cpassNode.value;
    errorNode5.innerHTML="";
    if(cpass===''){
        errorNode5.innerHTML=" confirm password is required";
        cpassNode.style.border=errorBorder;
        return false;
    }
    else if(cpass!=pass){
            errorNode5.innerHTML="both passwords should match";
            cpassNode.style.border=errorBorder;
            return false;
    }
    else{
        cpassNode.style.border=successBorder;
        return true;
    }
}