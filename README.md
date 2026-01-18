---
# 🇮🇪 Crechlie - Creche Finder Ireland

A modern, scalable web application to help parents find creches across Ireland.

Built with **Next.js**, **Supabase**, and **Vercel** — optimized for performance, SEO, and low-cost MVP development.
---

## 🚀 Tech Stack

- **Next.js (App Router)** – React framework for SEO & performance
- **Supabase** – PostgreSQL database, authentication, and storage
- **Vercel** – Hosting, deployment, and domain management
- **Material UI (MUI)** – UI components
- **React Icons** – Icon library

---

## 🎯 Project Goals (MVP)

- Search creches by **county, town, or name**
- Display creche details (location, services, contact info)
- SEO-friendly pages for Irish locations
- Scalable architecture for future features:
  - Creche owner accounts
  - Reviews
  - Availability & enquiries

---

## 🧱 Project Structure (Planned)

```
/app
  /page.jsx                # Homepage (search)
  /[county]/page.jsx       # Creches by county
  /creche/[slug]/page.jsx  # Creche details
  /api/creches/route.js    # API routes
/components
  Header.jsx
  SearchBar.jsx
  CrecheCard.jsx
/lib
  supabase.js              # Supabase client
```

---

## 🛠 Local Development Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/crechlie.git
cd crechlie
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> ⚠️ Never commit `.env.local` to GitHub

---

### 4️⃣ Run the development server

```bash
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 🔐 Deployment & Privacy (Important)

- The app is deployed on **Vercel**
- **Password protection is enabled** until launch
- Search engines are blocked using `robots` metadata
- Domain remains private during development

---

## 🌍 Deployment (Vercel)

1. Push this repository to GitHub
2. Import the repo into **Vercel**
3. Add environment variables in Vercel dashboard
4. Assign custom domain
5. Enable **Password Protection**

---

## 🧪 Status

🚧 **In active development (MVP phase)**
Public launch will happen after core features are complete.

---

## 📌 Roadmap (High Level)

- [ ] Supabase database schema
- [ ] Creche search & filters
- [ ] County-based pages
- [ ] SEO metadata
- [ ] Admin dashboard (future)
- [ ] Reviews & enquiries (future)

---

## 🤝 Contributing

This project is currently private / early-stage.
Contribution guidelines will be added later.

---

## 📄 License

TBD

---

******\*\*\******* Best Luck 👍 ******\*\*\*******
