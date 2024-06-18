import moment from 'moment'

export const calculateDaysOfStay = (checkInDate: Date, checkOutDate: Date) => {
  const startDate = moment(checkInDate)
  const endtDate = moment(checkOutDate)

  return endtDate.diff(startDate, 'days')
}
