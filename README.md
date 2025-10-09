# Task Manager Dashboard

A full-stack Task Manager Dashboard built with Next.js, React.js, Firebase Firestore, and Tailwind CSS. Features complete authentication system, project management, and task tracking with responsive design.

## 🚀 Live Demo

**Deployed on Vercel**: [https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app)

## ✨ Features

- 🔐 **Authentication System**: Login/Register with Firebase Auth
- 📊 **Dashboard**: Overview with stats cards and project summaries
- 📁 **Project Management**: Create, view, and manage projects
- ✅ **Task Management**: Full CRUD operations for tasks
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🔒 **Protected Routes**: Secure access to dashboard features
- 💾 **Persistent Sessions**: Stay logged in after page refresh
- 🚀 **Fast Performance**: Optimized with Next.js 15

## 🛠️ Tech Stack

- **Frontend**: React 18 + Next.js 15.5.4
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth + Custom API Routes
- **HTTP Client**: Axios
- **Notifications**: Notistack
- **Icons**: Material-UI Icons
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project with Firestore and Authentication enabled

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/your-username/zignuts-practical-task.git
cd zignuts-practical-task
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable **Authentication** (Email/Password method)
3. Enable **Firestore Database**
4. Set Firestore rules:

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

### 4. Environment Variables

Create `.env.local` file:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# JWT Secret
JWT_SECRET=your_jwt_secret_key
```

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/                 # Auth pages (login/register)
│   ├── (dashboard)/            # Protected dashboard pages
│   │   ├── dashboard/          # Main dashboard
│   │   ├── projects/           # Projects page
│   │   └── tasks/              # Tasks page
│   ├── api/                    # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── projects/           # Project CRUD endpoints
│   │   └── tasks/              # Task CRUD endpoints
│   ├── components/             # Reusable components
│   │   ├── authentication/     # Auth forms
│   │   ├── dashboard/          # Dashboard components
│   │   ├── project/            # Project components
│   │   ├── task/               # Task components
│   │   ├── modal/              # Modal components
│   │   └── common/             # Common components
│   ├── store/                  # Zustand stores
│   │   ├── authStore.js        # Authentication state
│   │   └── projectStore.js     # Project state
│   └── types/                  # TypeScript interfaces
├── utils/                      # Utility functions
│   ├── api.js                  # Axios configuration
│   ├── notification/           # Toast notifications
│   └── helper.js               # Helper functions
└── styles/                     # Global styles
```

## 🔐 Authentication Flow

1. **Registration**: Create account with email/password
2. **Login**: Authenticate and get session cookie
3. **Session Persistence**: Stay logged in after refresh
4. **Protected Routes**: Automatic redirect for unauthorized access
5. **Logout**: Clear session and redirect to login

## 📊 Key Features

### Dashboard
- Project overview cards
- Task statistics
- Recent activity summary
- Quick action buttons

### Project Management
- Create new projects
- View project details
- Project status tracking
- Task assignment

### Task Management
- Create, edit, delete tasks
- Task status updates
- Priority levels
- Due date tracking
- Project association

## 🎨 UI Components

- **Responsive Design**: Mobile-first approach
- **Modern Cards**: Clean project and task cards
- **Interactive Modals**: Create/edit forms
- **Toast Notifications**: User feedback
- **Loading States**: Smooth user experience
- **Action Buttons**: Intuitive controls

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛡️ Security Features

- ✅ Server-side authentication verification
- ✅ Protected API routes
- ✅ Secure session management
- ✅ Input validation and sanitization
- ✅ Environment variable protection
- ✅ CORS configuration

## 🎯 Performance Optimizations

- ✅ Next.js App Router
- ✅ Server-side rendering
- ✅ Code splitting
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Efficient state management

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Prasad Sapkal**  
Full-Stack Developer  
Zignuts Practical Task Implementation

---

**Built with ❤️ using Next.js and Firebase**