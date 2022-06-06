let unameNode,passNode;
let errorNode1,errorNode2;

const errorBorder="2px solid red";
const successBorder="2px solid green";

$(function(){
    unameNode=$('#uname');
    passNode=$('#pwd');

    errorNode1=$('#error1');
    errorNode2=$('#error2');

    unameNode.blur(()=>validate1());
    passNode.blur(()=>validate2());


});

function validateForm(){
    let s1=validate1();
    let s2=validate2();

    return (s1 && s2);
}

function validate1(){
    let name=unameNode.val(); 
    errorNode1.html("");  
    if(name===''){
        errorNode1.html("User name is required");
        unameNode.css('border',errorBorder);
        return false;
    }
    else{
        unameNode.css('border',successBorder);
        return true;
    }
}

function validate2(){
    let password=passNode.val();  
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    errorNode2.html("");  
   // console.log(regExp.test(password));   
    if(password===''){
        errorNode2.html("Password is required");
        passNode.css('border',errorBorder);
        return false;
    }
    else if(regExp.test(password)==false){
        errorNode2.html("Password should contain atleast one digit, small letter and capital letter.Password should be min 6 and max 15 characters long");
        passNode.css('border',errorBorder);
        return false;
    }
    else{
        passNode.css('border',successBorder);
        return true;
    }
}