// literal way 
let companyName ="testleaf" // string 
// instansiation way
let companyName1 = new String("testleaf") //object --> Non primitive

console.log(typeof companyName1)
console.log(companyName===companyName1)// false
console.log(companyName.toUpperCase())
console.log(companyName)
//########//
let data ="Order ID: #12345-Confirmed"
// req : to fetch only the order id 
let splitedValue = data.split("#")//  [0]--> Order ID: , [1]--> 12345-Confirmed
let result = splitedValue[1].split("-")[0]
console.log(result)

let result1 = data.slice(data.indexOf("#")+1,data.indexOf("-"))
console.log(result1)
//########//
//We have a function isValid(data) that checks if a field is populated.
function isValid(data){
 // 1) value should not null 2) value should not undefined 3) value should not be empty string
   return data!==null && data!==undefined && data!==""
}
console.log(isValid("bhuvanesh"))
console.log(isValid(768))
console.log(isValid(null))
console.log(isValid(""))

//########//
let price = "₹1,59,999"
let newPrice = price.replaceAll(",","")
console.log(newPrice)
let normalizedValue =newPrice.replace("₹","")
console.log(normalizedValue)
//########//
let log="ERROR: 404 [Time: 12:00] | INFO: Login Success [Time: 12:01] | ERROR: 500 [Time: 12:05]"
let timeStamp = log.split("|").filter(log=>log.includes("ERROR")).map(log=>log.split("Time:")[1].replace("]","").trim())
console.log(timeStamp)