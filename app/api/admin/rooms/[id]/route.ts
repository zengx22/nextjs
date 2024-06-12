import dbConnect from '@/backend/config/dbConnect'
import {
  deleteRoom,
  getRoomDetails,
  updateRoomDetails,
} from '@/backend/controllers/roomControllers'
import { createEdgeRouter } from 'next-connect'
import { NextRequest } from 'next/server'

interface RequestContext {
  params: {
    id: string
  }
}

const router = createEdgeRouter<NextRequest, RequestContext>()

dbConnect()

router.get(getRoomDetails)
router.put(updateRoomDetails)
router.delete(deleteRoom)

export async function GET(req: NextRequest, ctx: RequestContext) {
  return router.run(req, ctx)
}

export async function PUT(req: NextRequest, ctx: RequestContext) {
  return router.run(req, ctx)
}

export async function DELETE(req: NextRequest, ctx: RequestContext) {
  return router.run(req, ctx)
}
