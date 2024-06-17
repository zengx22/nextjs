'use client'
import { IRoom } from '@/backend/models/room'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  room: IRoom
}

const BookingDatePicker = ({ room }: Props) => {
  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date())

  const onChange = (dates: Date[]) => {
    const [checkInDate, checkOutDate] = dates

    setCheckInDate(checkInDate)
    setCheckOutDate(checkOutDate)

    if (checkInDate && checkOutDate) {
      console.log(checkInDate)
      console.log(checkOutDate)
    }
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
    </div>
  )
}

export default BookingDatePicker
