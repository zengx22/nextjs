import { NextRequest, NextResponse } from 'next/server'
import Room, { IRoom } from '../models/room'
import ErrorHandler from '../utils/errorHandler'
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors'
import APIFilters from '../utils/apiFilters'

export const allRooms = async (req: NextRequest) => {
  const resPerPage: number = 8

  const { searchParams } = new URL(req.url)

  const queryStr: any = {}
  searchParams.forEach((value, key) => {
    queryStr[key] = value
  })

  const roomsCount: number = await Room.countDocuments()
  const apiFilters = new APIFilters(Room, queryStr).search().filter()

  let rooms: IRoom[] = await apiFilters.query
  const filteredRoomsCount: number = rooms.length

  apiFilters.pagination(resPerPage)
  rooms = await apiFilters.query.clone()

  return NextResponse.json({
    success: true,
    roomsCount,
    filteredRoomsCount,
    resPerPage,
    rooms,
  })
}

export const newRoom = async (req: NextRequest) => {
  const body = await req.json()

  const room = await Room.create(body)

  return NextResponse.json({
    success: true,
    room,
  })
}

// Get room details
export const getRoomDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id)

    throw new ErrorHandler('Hello yall', 400)

    if (!room) {
      return NextResponse.json(
        {
          message: 'Room not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      room,
    })
  }
)

// Update room details
export const updateRoomDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id)
    const body = await req.json()

    if (!room) {
      return NextResponse.json(
        {
          message: 'Room not found',
        },
        { status: 404 }
      )
    }

    room = await Room.findByIdAndUpdate(params.id, body, {
      new: true,
    })

    return NextResponse.json({
      success: true,
      room,
    })
  }
)

// Delete room details
export const deleteRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id)

    if (!room) {
      return NextResponse.json(
        {
          message: 'Room not found',
        },
        { status: 404 }
      )
    }

    await room.deleteOne()

    return NextResponse.json({
      success: true,
    })
  }
)
