# 🚀 Mini Social App — Frontend

A modern social media frontend built with **Next.js** and **Material UI**, allowing users to create posts, upload images, like content, and interact through comments.

This application focuses on clean UI, strong UX patterns, and seamless integration with a RESTful backend.

---

## 🌐 Live Demo

👉 https://mini-social-app-client.vercel.app

---

## ✨ Features

### 🔐 Authentication UI
- Signup & Login pages
- Persistent login using JWT
- Protected feed route
- Automatic redirects for unauthorized users

---

### 📰 Social Feed
- Public feed displaying all posts
- Newest posts appear first
- Loading states for better UX
- Empty state when no posts exist

---

### 📝 Create Post
- Create posts with text, image, or both
- Image preview before upload
- Disabled button during upload
- Instant feed refresh after posting

---

### ❤️ Engagement
- Like / Unlike posts
- Comment on posts
- Toggle comment visibility
- Real-time UI updates after interactions

---

### 🎨 Modern UI / UX
- Built with **Material UI**
- Card-based layout
- Responsive design
- Clean spacing & typography
- Interactive components
- Professional visual hierarchy

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **Material UI**
- **Axios**
- **Cloudinary (via backend)**

---

## 📂 Folder Structure
```
frontend
│
├── app/
│ ├── login/
│ ├── signup/
│ ├── feed/
│
├── components/
│ ├── PostCard
│ ├── CreatePost
│ ├── Navbar
│
├── utils/
│ └── axios.js

```

Designed for scalability and clean component separation.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/mini-social-app-frontend.git
cd mini-social-app-frontend
```
## 2️⃣ Install dependencies
```
bun install
```

## 3️⃣ Environment Variables

Create a .env.local file:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
## 4️⃣ Run the development server
```
npm run dev
```