const { WEEKDAY_FEES, WEEKEND_FEES } = require("./constants/fees")
const { WEEKDAYS } = require("./constants/days")
const {
  getDayAndHours,
  getNameAndSchedule,
  getScheduleElements,
  getStartAndEndHour,
} = require("./utils")

const intervalPayment = (startHour, endHour, rates) => {
  let payment = 0
  for (const rate of rates) {
    const intervalStart = Math.max(startHour, rate.startHour)
    const intervalEnd = Math.min(endHour, rate.endHour)
    if (intervalStart < intervalEnd) {
      payment += (intervalEnd - intervalStart) * rate.fee
    }
  }
  return payment
}

const calculateTotalPayment = (day, start, end) => {
  const startHour = parseInt(start.split(":")[0])
  const endHour = parseInt(end.split(":")[0])
  if (WEEKDAYS.includes(day)) {
    return intervalPayment(startHour, endHour, WEEKDAY_FEES)
  } else {
    return intervalPayment(startHour, endHour, WEEKEND_FEES)
  }
}

const showFinalPayment = (element) => {
  const { name, schedule } = getNameAndSchedule(element)

  const scheduleElements = getScheduleElements(schedule)

  let totalPay = 0

  for (const element of scheduleElements) {
    const { day, hours } = getDayAndHours(element)
    const { startHour, endHour } = getStartAndEndHour(hours)

    totalPay += calculateTotalPayment(day, startHour, endHour)
  }
  console.log(`The amount to pay ${name} is: ${totalPay} USD`)
}

module.exports = { calculateTotalPayment, showFinalPayment }
