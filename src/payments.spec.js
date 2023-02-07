const payments = require("./payments")
const fs = require("fs")

describe("payments", () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should return the final payment for a single person", () => {
    const input =
      "MOE=MO06:00-11:00,WE18:00-22:00,TH02:00-05:00,SA13:00-14:00,SU10:00-12:00"

    const finalPayment = payments.showFinalPayment(input)
    const expectedPayment = 320

    expect(finalPayment).toBe(expectedPayment)
  })

  it("should show on console the pay for a single person", () => {
    const consoleSpy = jest.spyOn(console, "log")

    const input = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00"

    payments.showFinalPayment(input)

    expect(consoleSpy).toHaveBeenCalledWith(
      "The amount to pay ASTRID is: 85 USD"
    )
  })

  it("should calculate the pay for a weekend day", () => {
    const expectedPay = 20

    const payment = payments.calculateTotalPayment("SU", "13:00", "14:00")

    expect(payment).toBe(expectedPay)
  })

  it("should calculate the pay for a weekday", () => {
    const expectedPay = 30

    const payment = payments.calculateTotalPayment("TH", "13:00", "15:00")

    expect(payment).toBe(expectedPay)
  })

  it("should return an error if there is no input file", (done) => {
    let readFileCallback
    jest.spyOn(fs, "readFile").mockImplementation((path, options, callback) => {
      readFileCallback = callback
    })

    payments.processPayments("./badPath")

    expect(() => readFileCallback()).toThrow(Error)
    done()
  })
})
