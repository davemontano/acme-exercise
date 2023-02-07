const fs = require("fs")

const getDayAndHours = (item) => {
  const day = item.substring(0, 2)
  const hours = item.substring(2)

  return { day, hours }
}

const getNameAndSchedule = (item) => {
  const [name, schedule] = item.split("=")

  return { name, schedule }
}

const getScheduleElements = (schedule) => {
  const scheduleElements = schedule.split(",")

  return scheduleElements
}

const getStartAndEndHour = (hours) => {
  const [startHour, endHour] = hours.split("-")

  return { startHour, endHour }
}

module.exports = {
  getDayAndHours,
  getNameAndSchedule,
  getScheduleElements,
  getStartAndEndHour,
}
