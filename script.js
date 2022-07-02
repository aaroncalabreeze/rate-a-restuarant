let cashier=0
let c_tot=0
let c_num=0


cashierScoreBtn1 = document.getElementById("cashier-1")
cashierScoreBtn1.addEventListener("click", function() {
c_tot=c_tot+1
c_num=c_num+1
cashier=c_tot/c_num
cashierScore.textcontent=cashier
})
//cashier button 2
cashierScoreBtn2 = document.getElementById("cashier-2")
cashierScoreBtn2.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	console.log(cashier)
})
