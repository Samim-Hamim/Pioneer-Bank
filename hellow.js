function login(){

  document.write(`   <title>Pioneer Bank</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"> <div class="full-shopping-page" id="block">
        <div class="row container new">
            <div class="col-md-4">
               <div class="style1">
                <h1 class="text-center font-weight-bold">Deposit</h1>
                <h3 class="text-center">$<span id="currentDeposit">00</span></h3>
               </div>
                </div>
            <div class="col-md-4">
              <div class="style2">
                <h1 class="text-center font-weight-bold">Withdraw</h1>
                <h3 class="text-center">$<span id="currentWithdraw">00</span></h3>
              </div>
                </div>
            <div class="col-md-4">
               <div class="style3">
                <h1 class="text-center font-weight-bold">Balance</h1>
                <h3 class="text-center">$<span id="currentBalance">00</span></h3>
               </div>
                </div>
            </div>
            <div class="Amount container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="deposit-box">
                            <h2 class="text-center">Deposit</h2>
                            <input type="text" class="form-control" id="DepositNumber" placeholder="$ amount you want to deposit">
                            <br>
                            <button class="btn btn-success" id="addDeposit">Deposit</button>
                    </div>
                </div>
                    <div class="col-md-6">
                        <div class="Withdraw-box">
                            <h2 class="text-center">Withdraw</h2>
                            <input type="text" class="form-control" id="WithdrawNumber" placeholder="$ amount you want to withdraw">
                            <br>
                            <button class="btn btn-danger" id="addWithdraw">Withdraw</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
<style>
.new{
    margin: 0 auto;
}
.Withdraw-box{
    box-shadow: 5px 5px 25px gray; 
    border-radius: 10px;
    height: 250px;
    margin-top: 70px;
    padding: 50px;
    background: #ffebcd3b;
    transition:0.1s;

}
.Withdraw-box:hover{
    box-shadow: 5px 5px 50px #808080a1;
}
.deposit-box{
    box-shadow: 5px 5px 25px gray; 
    border-radius: 10px;
    height: 250px;
    margin-top: 70px;
    padding: 50px;
    background: #ffebcd3b;
transition:0.1s;
}
.deposit-box:hover{
    box-shadow: 5px 5px 50px #808080a1;
}

.style1{
    background-image: linear-gradient(45deg,blue,cyan);
    margin:15px;
    padding:20px;
    border-radius: 20px;
    color:white;
    transition:0.2s;
}
.style1:hover{
      box-shadow: 0px 0px 9px grey;}
.style2{
    background-image: linear-gradient(45deg,red,orange);
    margin:15px;
    padding:20px;
    border-radius: 20px;
    color:white;
    transition:0.2s;
}
.style2:hover{
      box-shadow: 0px 0px 9px grey;
}
.style3{
    background-image: linear-gradient(45deg,green,#7bff00);
    margin:15px;
    padding:20px;
    border-radius: 20px;
    color:white;
    transition:0.2s;
}
.style3:hover{
      box-shadow: 0px 0px 9px grey;
}

button{
   display: block!important;
   margin: auto;
}
.Withdraw-box{
    box-shadow: 5px 5px 25px gray; 
    border-radius: 10px;
    height: 250px;
    margin-top: 70px;
    padding: 50px;
    background: #ffebcd3b;
    transition:0.1s;

}
.Withdraw-box:hover{
    box-shadow: 5px 5px 50px #808080a1;
}
.deposit-box{
    box-shadow: 5px 5px 25px gray; 
    border-radius: 10px;
    height: 250px;
    margin-top: 70px;
    padding: 50px;
    background: #ffebcd3b;
transition:0.1s;
}
.deposit-box:hover{
    box-shadow: 5px 5px 50px #808080a1;
}


</style>

`)
  
const addDeposit=document.getElementById("addDeposit");
addDeposit.addEventListener("click",function(){
    const DepositNumber=document.getElementById("DepositNumber").value;
    const currentDepositNumber=parseFloat(DepositNumber);
    const currentDeposit=document.getElementById("currentDeposit").innerText;
    const updatecurrentDeposit=parseFloat(currentDeposit);
    const total=currentDepositNumber+updatecurrentDeposit;
    document.getElementById("currentDeposit").innerText=total;
    const currentBalance=document.getElementById("currentBalance").innerText;
    const updatecurrentBalance=parseFloat(currentBalance);
    const total2=updatecurrentBalance+currentDepositNumber;
    document.getElementById("currentBalance").innerText=total2;
    document.getElementById("DepositNumber").value="";

})








const addWithdraw=document.getElementById("addWithdraw");
addWithdraw.addEventListener("click",function(){
    const WithdrawNumber=document.getElementById("WithdrawNumber").value;
    const currentWithdrawNumber=parseFloat(WithdrawNumber);
    const currentWithdraw=document.getElementById("currentWithdraw").innerText;
    const updatecurrentWithdraw=parseFloat(currentWithdraw);
    const total3=currentWithdrawNumber+updatecurrentWithdraw;
    document.getElementById("currentWithdraw").innerText=total3;
    const currentBalance=document.getElementById("currentBalance").innerText;
    const updatecurrentBalance=parseFloat(currentBalance);
    const total4=updatecurrentBalance-currentWithdrawNumber;
    document.getElementById("currentBalance").innerText=total4;
    document.getElementById("WithdrawNumber").value="";

})
}





