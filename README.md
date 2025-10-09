# Task Manager Dashboard

A full-stack Task Manager Dashboard built with Next.js, React.js, Firebase Firestore, and Tailwind CSS. All CRUD operations and authentication are handled securely via Next.js API routes.

## 🚀 Features

### ✅ Completed Features

#### 1. Authentication System
- ✅ Firebase Authentication with Email/Password
- ✅ Login and Register pages with form validation
- ✅ Zustand state management for authentication
- ✅ Protected dashboard routes with automatic redirects
- ✅ Secure logout functionality
- ✅ Session persistence with cookies

#### 2. Dashboard
- ✅ Authenticated user dashboard with project overview
- ✅ Project list fetching via secured API routes
- ✅ Real-time project statistics (total projects, completed tasks, progress)
- ✅ Grid and List view for projects
- ✅ Project cards with task progress indicators

#### 3. Projects Management
- ✅ Create new projects with modal interface
- ✅ Project details: Name, Description, Status, Priority, Budget
- ✅ Projects table with pagination
- ✅ Project data stored in Firebase Firestore
- ✅ Real-time project updates

#### 4. Tasks Management
- ✅ Add tasks to specific projects via modal
- ✅ Task structure: Title, Description, Status, Priority, Due Date
- ✅ Task creation with project association
- ✅ Tasks stored in separate Firestore collection
- ✅ Project-specific task filtering

#### 5. API Routes (Secured)
- ✅ `/api/auth/login` - User authentication
- ✅ `/api/auth/register` - User registration
- ✅ `/api/auth/verify` - Session verification
- ✅ `/api/auth/logout` - User logout
- ✅ `/api/projects` - GET, POST for projects
- ✅ `/api/tasks` - GET, POST for tasks

#### 6. State Management
- ✅ Zustand for authentication state
- ✅ Zustand for project state management
- ✅ No direct Firebase SDK usage in frontend
- ✅ All data synced via internal API endpoints

#### 7. UI/UX
- ✅ Tailwind CSS for responsive design
- ✅ Modern dashboard interface
- ✅ Modal components for forms
- ✅ Loading states and error handling
- ✅ Mobile-responsive design

### 🔄 Partially Implemented

#### Tasks Management
- ✅ Task creation
- ⚠️ Task status updates (UI ready, API needs implementation)
- ❌ Task deletion
- ❌ Task editing

### ❌ Pending Features

#### 1. Complete Task CRUD Operations
- ❌ PUT `/api/tasks/[id]` - Update task status/details
- ❌ DELETE `/api/tasks/[id]` - Delete tasks
- ❌ Task editing modal interface
- ❌ Task status update UI (drag & drop or buttons)

#### 2. Enhanced UI Components
- ❌ MUI integration for forms and components
- ❌ Advanced task filtering and sorting
- ❌ Task due date notifications
- ❌ Project progress charts

#### 3. Additional Features
- ❌ User profile management
- ❌ Project collaboration (multiple users)
- ❌ Task assignment to users
- ❌ Email notifications
- ❌ Data export functionality

## 🛠️ Tech Stack

- **Frontend**: React 18 + Next.js 15.5.4
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **API**: Next.js API Routes
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project with Firestore and Authentication enabled

## 🚀 Setup Instructions

### 1. Clone Repository
```bash
git clone <repository-url>
cd zignuts-practical-task
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Firebase Setup

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Enable Firestore Database
5. Set Firestore rules to allow authenticated users:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // For development only
    }
  }
}
```

#### Get Firebase Config
1. Go to Project Settings → General
2. Add a web app
3. Copy the configuration

### 4. Environment Variables

Create `.env.local` file in root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# JWT Secret (for API routes)
JWT_SECRET=your_jwt_secret_key
```

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── projects/
│   │   └── tasks/
│   ├── api/
│   │   ├── auth/
│   │   ├── projects/
│   │   └── tasks/
│   ├── components/
│   │   ├── authentication/
│   │   ├── project/
│   │   └── modals/
│   ├── lib/
│   │   └── firebase.js
│   └── store/
│       ├── authStore.js
│       └── projectStore.js
├── utils/
└── styles/
```

## 🔐 Security Features

- ✅ Server-side authentication verification
- ✅ Protected API routes with user validation
- ✅ Secure cookie-based sessions
- ✅ Environment variables for sensitive data
- ✅ No direct Firebase SDK exposure to frontend

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Responsive navigation
- ✅ Adaptive layouts for different screen sizes
- ✅ Touch-friendly interfaces

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📈 Progress Status

**Overall Completion: ~75%**

- **Authentication**: 100% ✅
- **Dashboard**: 100% ✅  
- **Projects**: 100% ✅
- **Tasks**: 60% ⚠️ (Create ✅, Update ❌, Delete ❌)
- **API Routes**: 80% ⚠️ (Missing PUT, DELETE for tasks)
- **UI/UX**: 85% ⚠️ (Missing MUI integration)

## 🔄 Next Steps

1. **Complete Task CRUD Operations**
   - Implement PUT and DELETE API routes for tasks
   - Add task editing and deletion UI
   - Task status update functionality

2. **MUI Integration**
   - Replace custom forms with MUI components
   - Add MUI data tables and components

3. **Enhanced Features**
   - Task filtering and sorting
   - Advanced project management
   - User notifications

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Prasad Sapkal**  
Zignuts Practical Task Implementation

---

**Note**: This is a development version. For production deployment, ensure proper security configurations and environment setup.