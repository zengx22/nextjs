'use client'
import { IRoom } from '@/backend/models/room'
import { calculateDaysOfStay } from '@/helpers/helpers'
import { useNewBookingMutation } from '@/redux/api/bookingApi'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  room: IRoom
}

const BookingDatePicker = ({ room }: Props) => {
  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date())
  const [daysOfStay, setdaysOfStay] = useState(0)

  const [newBooking] = useNewBookingMutation()

  const onChange = (dates: Date[]) => {
    const [checkInDate, checkOutDate] = dates

    setCheckInDate(checkInDate)
    setCheckOutDate(checkOutDate)

    if (checkInDate && checkOutDate) {
      const days = calculateDaysOfStay(checkInDate, checkOutDate)

      setdaysOfStay(days)
    }
  }

  const bookRoom = () => {
    const bookingData = {
      room: room?._id,
      checkInDate,
      checkOutDate,
      daysOfStay,
      amountPaid: room.pricePerNight * daysOfStay,
      paymentInfo: {
        id: 'STRIPE_ID',
        status: 'PAID',
      },
    }

    newBooking(bookingData)
  }

  return (
    <div className='booking-card shadow p-4'>
      <p className='price-per-night'>
        <b>${room?.pricePerNight} / Night</b>
      </p>

      <hr />

      <p className='mt5 mb3'>Pick Checkin and Checkout Dates</p>
      <DatePicker
        className='w-100'
        selected={checkInDate}
        onChange={onChange}
        minDate={new Date()}
        startDate={checkInDate}
        endDate={checkOutDate}
        selectsRange
        inline
      />

      <button className='btn py-3 form-btn w-100' onClick={bookRoom}>
        Pay
      </button>
    </div>
  )
}

export default BookingDatePicker
