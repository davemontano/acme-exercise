const fs = require("fs")
const payments = require("./payments")

const INPUT_FILE = "./data/input.txt"

fs.readFile(INPUT_FILE, "utf-8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const inputArray = data.split("\n")

  inputArray.forEach((element) => {
    payments.showFinalPayment(element)
  })
})
