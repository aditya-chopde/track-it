# Expense Manager App

An intuitive web based application for managing your personal or business expenses. Track your income, expenses, and budget effectively to gain financial clarity and make informed decisions. Making this project as an open source project, let's contribute together make it big.

## Features
- **Add and Categorize Expenses**: Quickly add expenses and assign them to predefined or custom categories.
- **Income Tracking**: Record sources of income to calculate your financial balance.
- **Budgeting**: Set budgets for categories to monitor spending.
- **Reports and Insights**: Visualize your financial health with graphs and detailed reports.
- **Secure SignUp and Login**: Protect your data with secure authentication.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** : For using NPM commands
- **MongoDB**: For database
- **npm** or **yarn** for dependecy management 

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-manager.git
   cd expense-manager
   ```
2. For backend
    ```bash
    cd server
    ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables by creating a `.env` file in the root directory:
   ```env
   PORT=8080
   MONGO_URI="mongodb+srv://adityachopde27:BeOYGmPNsvo8r7ku@cluster0.fg9bt.mongodb.net/track-it"
   JWT_SECRET="aditya_dev@secret"
   ```
5. Start the server:
   ```bash
   npm run start
   ```
6. Access the app in your browser at `http://localhost:8080`.

7. For Frontend
    ```bash
    cd app
    ```

8. Start the Server
    ```bash
    npm run  dev
    ```

## Usage
1. **Sign Up or Log In**: Create a new account or log in to an existing one.
2. **Add Income and Expenses**: Navigate to the dashboard and start adding your financial data.
3. **View Reports**: Access insights and detailed reports in the "Reports" section.
4. **Set Budgets**: Manage your spending by setting budgets for categories.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS
- **Charts**: Chart.js or D3.js

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork and create a pull request.

## Contact
For any inquiries or support, please contact:
- **Email**: its.adityac@gmail.com
- **GitHub**: [@aditya-chopde](https://github.com/aditya-chopde)

---

**Take control of your finances today with the Expense Manager App!**

