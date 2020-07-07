function open_click() {
  document.getElementById("chatbox").style.display = "block";
  $("#startchat").css("display", "none");
}

function exit_click(){
  document.getElementById("chatbox").style.display= "none";
  document.getElementById("startchat").style.display = "block";
}

function ans_summer(){
  var para = document.createElement("div");
  para.innerHTML = "<p>Glad to be of help. please click on the button below</p>";
  document.getElementById("chatbox").appendChild(para);
  para.setAttribute("class","speech-bubble container");
  para.setAttribute("style", "background-color: #fccff0;color: #210219;border-radius: 2%;padding: 2px;margin-top: 20px;margin-left: 0px; margin-right:10px;");
  var ans = document.createElement("button");
  ans.innerHTML = "click me!";
  document.getElementById("chatbox").appendChild(ans);
  ans.setAttribute("onclick","location.href='https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Common/Campaign/PDFs/June%202020/Summer%20Treats/HDFC%20Bank%20Summer%20Treats_Booklet.pdf&_ga=2.115740292.322217163.1593716523-360028743.1593716523';");
  ans.setAttribute("target","_blank");
}

 function summer(){
   var para = document.createElement("div");
   para.innerHTML = "<p>Summer Treats</p>";
   para.setAttribute("class","speech-bubble container");
   para.setAttribute("class","first");

   document.getElementById("chatbox").appendChild(para);
   ans_summer();
 }

function ans_iPhone(){
  var para = document.createElement("div");
  para.innerHTML = "HDFC Bank presents Summer Deals with iPhone SE.\nOwn it at ₹42,500 ₹38,900 only with our Cards & EASYEMI. Enjoy No Cost EMI too.";
  document.getElementById("chatbox").appendChild(para);
  para.setAttribute("class","speech-bubble container");
  para.setAttribute("style", "background-color: #fccff0;color: #210219;border-radius: 2%;padding: 2px;margin-top: 20px;margin-left: 0px; margin-right:10px;");

  var ans = document.createElement("div");
  ans.innerHTML="please <a href='https:\/\/bit.ly/2AJLetn'>click here</a>to check offer details";
  document.getElementById("chatbox").appendChild(ans);
  ans.setAttribute("style", "background-color: #fccff0;color: #210219;border-radius: 2%;padding: 2px;margin-top: 20px;margin-left: 0px; margin-right:10px;");
  ans.setAttribute("class","speech-bubble");

  var ans2 = document.createElement("div");
  ans2.innerHTML="please <a href='https:\/\/bit.ly/3dVQEzM'>click here</a> to shop now";
  document.getElementById("chatbox").appendChild(ans2);
  ans2.setAttribute("style", "background-color: #fccff0;color: #210219;border-radius: 2%;padding: 2px;margin-top: 20px;margin-left: 0px; margin-right:10px;");
  ans2.setAttribute("class","speech-bubble");

  var ans3 = document.createElement("div");
  ans3.innerHTML="for more details please <a href='https://youtu.be/j7QZXCQbFpA'>click here</a>";
  document.getElementById("chatbox").appendChild(ans3);
  ans3.setAttribute("style", "background-color: #fccff0;color: #210219;border-radius: 2%;padding: 2px;margin-top: 20px;margin-left: 0px; margin-right:10px;");
  ans3.setAttribute("class","speech-bubble");
}

 function iPhone(){
   var para = document.createElement("div");
   para.innerHTML = "iPhone SE2 offer";
   para.setAttribute("class","speech-bubble container");
   para.setAttribute("class","first");

   document.getElementById("chatbox").appendChild(para);
   ans_iPhone();
 }

function ans_Digital(){
  var para = document.createElement("div");
  para.innerHTML = "thank you for opening a digital account with us. we are looking forward to serve you. please click on the button below";
  document.getElementById("chatbox").appendChild(para);
  para.setAttribute("style", "background-color: #fccff0;color: #210219;border-radius: 2%;padding: 2px;margin-top: 20px;margin-left: 0px; margin-right:10px;");
  para.setAttribute("class","speech-bubble container");

  var ans = document.createElement("button");
  $(".button").addClass("btn btn-success");
  ans.innerHTML = "click me";
  document.getElementById("chatbox").appendChild(ans);
  ans.setAttribute("onclick","location.href='https://apply.hdfcbank.com/vivid/demat_eligibility#DA_NBLogin';");
  ans.setAttribute("target","_blank");
}

 function Digital(){
   var para = document.createElement("div");
   para.innerHTML = "Open Digital Account";
   para.setAttribute("class","speech-bubble container");
   para.setAttribute("class","first");

   document.getElementById("chatbox").appendChild(para);
   ans_Digital();
}

function ans_payment(){
  var para = document.createElement("div");
  para.innerHTML = "Please choose from the services below:";
  para.setAttribute("class","speech-bubble container");
  document.getElementById("chatbox").appendChild(para);
  para.setAttribute("style", "background-color: #fccff0;color: #210219;border-radius: 2%;padding: 2px;margin-top: 20px;margin-left: 0px; margin-right:10px;");

  var btn = document.createElement("button");
  $(".button").addClass("btn btn-success");
  btn.innerHTML = "Postpaid bill";
  document.getElementById("chatbox").appendChild(btn);
  btn.setAttribute("onclick","location.href='https://www.hdfcbank.com/personal/pay/bill-payments-and-recharge/mobile-post-paid-bill-payment?_ga=2.18220475.322217163.1593716523-360028743.1593716523'")

  var btn1 = document.createElement("button");
  $(".button").addClass("btn btn-success");
  document.getElementById("chatbox").appendChild(btn1);
  btn1.innerHTML = "Electricity bill";
  btn1.setAttribute("onclick","location.href='https://www.hdfcbank.com/personal/pay/bill-payments-and-recharge/electricity-bill-payment?_ga=2.3588530.322217163.1593716523-360028743.1593716523'")

  var btn2 = document.createElement("button");
  $(".button").addClass("btn btn-success");
  document.getElementById("chatbox").appendChild(btn2);
  btn2.innerHTML = "DTH recharge";
  btn2.setAttribute("onclick","location.href='https://www.hdfcbank.com/personal/pay/bill-payments-and-recharge/mobile-pre-paid?_ga=2.40250784.322217163.1593716523-360028743.1593716523'")
}

function payment(){
  var para = document.createElement("div");
  para.innerHTML = "payment of bills/recharge";
  para.setAttribute("class","speech-bubble container");
  para.setAttribute("class","first");
  document.getElementById("chatbox").appendChild(para);
  ans_payment();
}
