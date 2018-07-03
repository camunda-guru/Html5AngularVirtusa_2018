var loanNo:Number
var customerName:String
var dematAccount:Boolean
enum acttype{SAVINGS,CURRENT,DEMAT,FD}
var accountType:acttype
var loan:any={
    acNo:438768574,
    amount:34785,
    tenure:7,
    roi:0.08
}
loanNo=4378568743
customerName="Sudharsan"
dematAccount=false
accountType=acttype.DEMAT
console.log("Loan No",loanNo)
console.log("Customer Name",customerName)
console.log("dematAccount",dematAccount)
console.log("Account Type=",accountType)
console.log("Loan Details")
console.log(loan)