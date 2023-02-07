const fs = require("fs")
const payments = require("./payments")

const INPUT_FILE = __dirname + "/data/input.txt"

fs.readFile(INPUT_FILE, "utf-8", (err, data) => {
  if (err) {
    throw new Error(err)
  }
  const inputArray = data.split("\n")

  try {
    inputArray.forEach((element) => {
      payments.showFinalPayment(element)
    })
  } catch(error) {
    throw new Error(error)
  }
})
