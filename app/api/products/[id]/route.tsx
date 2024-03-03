import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id) {
    return NextResponse.json({
      message: `user ${params.id} is deleted successfully`,
    });
  }
}
