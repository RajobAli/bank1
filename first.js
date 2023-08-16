
const inputdeposit = document.getElementById("depositinput").addEventListener('click',function(){
    const inputvalue = document.getElementById("inputdeposit");
    const inputvalue3 = inputvalue.value;
    const inputvalue2 = parseFloat(inputvalue3);

    const deposit = document.getElementById("deposit1");
    const depositone = deposit.innerText;
    const deposittwo = parseFloat(depositone);
    deposit.innerText =inputvalue2 + deposittwo;
    inputvalue.value = '';


    // current balence
    const current1 = document.getElementById("deposit3");
    const current2 = current1.innerText;
    const current3 = parseFloat(current2);
    const current4  = current3 + inputvalue2;
    current1.innerText = current4;

  

  

  
        
    
 
  

   

});

const withdrawbutton = document.getElementById("withdrawinput").addEventListener('click',function(){
    const inputwithdraw = document.getElementById("inputwithdraw");
    const input2 = inputwithdraw.value;
    const input3 = parseFloat(input2);

    const current5 = document.getElementById("deposit2");
    const current6 = current5.innerText;
    const current7 = parseFloat(current6);
    const totalwithdraw = input3 + current7;
    current5.innerText = totalwithdraw;

    const currentbb = document.querySelector(".currentbb");
    const currentbb1 = currentbb.innerText;
    const currentbb2 = parseFloat(currentbb1);
    inputwithdraw.value = '';

    if(currentbb2<totalwithdraw){
        alert("Insaficant balence")
    }else{
        currentbb.innerText = currentbb2 - input3;
   
       

    }


    

  
  


   

   
 
    
});