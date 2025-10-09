# Task Manager Dashboard

A full-stack Task Manager Dashboard built with Next.js, React.js, Firebase Firestore, and Tailwind CSS. All CRUD operations and authentication are handled securely via Next.js API routes.

## Tech Stack

- **Frontend**: React 18 + Next.js 15.5.4
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **API**: Next.js API Routes
- **Deployment**: Vercel (recommended)

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project with Firestore and Authentication enabled

## Setup Instructions

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

## Security Features

- ✅ Server-side authentication verification
- ✅ Protected API routes with user validation
- ✅ Secure cookie-based sessions
- ✅ Environment variables for sensitive data
- ✅ No direct Firebase SDK exposure to frontend

## Responsive Design

- ✅ Mobile-first approach
- ✅ Responsive navigation
- ✅ Adaptive layouts for different screen sizes
- ✅ Touch-friendly interfaces

## Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.

## Developer

**Prasad Sapkal**  
Zignuts Practical Task Implementation

---

**Note**: This is a development version. For production deployment, ensure proper security configurations and environment setup.