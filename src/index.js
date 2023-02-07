const fs = require("fs")
const payments = require("./payments")

const INPUT_FILE = __dirname + "/data/input.txt"

payments.processPayments(INPUT_FILE)
