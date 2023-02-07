const WEEKDAY_FEES = [
  {
    startHour: 0,
    endHour: 9,
    fee: 25,
  },
  {
    startHour: 9,
    endHour: 18,
    fee: 15,
  },
  {
    startHour: 18,
    endHour: 24,
    fee: 20,
  },
]

const WEEKEND_FEES = [
  {
    startHour: 0,
    endHour: 9,
    fee: 30,
  },
  {
    startHour: 9,
    endHour: 18,
    fee: 20,
  },
  {
    startHour: 18,
    endHour: 24,
    fee: 25,
  },
]

module.exports = { WEEKDAY_FEES, WEEKEND_FEES }
