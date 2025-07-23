
# 🧾 Expense Tracker App – Fullstack Assignment

This is a fullstack expense tracking application built for remote teams, designed as part of the Pocketrocket Labs take-home assignment. It features role-based access control, expense management, visual insights, and audit logging.

## 🚀 Features

### 🔐 Authentication & Role-Based Access Control
- Email/password login
- Roles:
  - **Employee**: Can manage their own expenses
  - **Admin**: Can view and act on all expenses

### 💸 Expense Management
- Employees can:
  - Add expenses (amount, category, date, notes)
  - View their own expenses
- Admins can:
  - View all expenses
  - Filter by category/status/date
  - Change status: `Pending`, `Approved`, `Rejected`

### 📊 Insights & Charts (Admin Only)
- Bar chart: Total expenses per category
- Line chart: Monthly expense breakdown

### 📜 Audit Logs
- Tracks key actions like expense creation and status changes
- Admin-only log viewer

## 🛠️ Tech Stack

| Layer       | Technology         |
|------------|--------------------|
| Frontend   | React.js           |
| Backend    | Node.js + Express  |
| Database   | PostgreSQL         |
| Auth       | JWT-based          |
| Charts     | Chart.js           |

## 🎁 Bonus Features
- CSV export
- File upload for receipts (mocked)
- Dockerized setup
- Basic unit tests
- Deployed version (e.g., Render/Railway)

## 📷 Screenshots
_Add screenshots here to showcase key features._

## 🧭 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/Kshitijv17/assignment_expense.git
   cd assignment_expense
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file with DB credentials and JWT secret

4. Run the app:
   ```bash
   npm start
   ```

## 🧠 Architecture Notes

- Modular backend with clear separation of concerns
- Secure RBAC implementation using middleware
- Charting handled via reusable components
- Audit logs stored and displayed for transparency

## ⚖️ Trade-offs

- Chose PostgreSQL for relational data modeling
- Mocked file uploads to simplify setup
- Focused on functionality and clarity over visual polish

---

Feel free to fork, clone, or reach out for feedback!

```

Let me know if you want to include screenshots, deployment links, or tweak the tone. Happy to tailor it further!
