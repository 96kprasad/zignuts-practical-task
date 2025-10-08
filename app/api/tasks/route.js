export async function GET(request) {
  return Response.json({ message: 'Get tasks' })
}

export async function POST(request) {
  return Response.json({ message: 'Create task' })
}