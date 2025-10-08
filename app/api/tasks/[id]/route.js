export async function GET(request, { params }) {
  return Response.json({ message: `Get task ${params.id}` })
}

export async function PUT(request, { params }) {
  return Response.json({ message: `Update task ${params.id}` })
}

export async function DELETE(request, { params }) {
  return Response.json({ message: `Delete task ${params.id}` })
}