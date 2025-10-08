import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../../lib/firebase'

export async function GET() {
  try {
    const tasksRef = collection(db, 'tasks')
    const snapshot = await getDocs(tasksRef)
    const tasks = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    return Response.json({ success: true, tasks })
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const taskData = await request.json()
    
    const tasksRef = collection(db, 'tasks')
    const docRef = await addDoc(tasksRef, {
      ...taskData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    return Response.json({
      success: true,
      task: { id: docRef.id, ...taskData }
    })
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}