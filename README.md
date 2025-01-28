# Admin Data Table - User Payment Management

This project implements an admin data table to manage users of a paid service, showing their payment status and allowing the admin to interact with the data. The table is designed to display users' details and includes features like sorting, filtering, and row expansion. The framework used for this project is **Vue.js** with **Vuex** or **Pinia** for state management.

## Features

### 1. **Tabs for Payment Status**

- Tabs available: **All**, **Paid**, **Unpaid**, **Overdue**.
- **All** tab shows all users regardless of payment status.
- **Paid** tab shows users with "Paid" status.
- **Unpaid** tab shows users with "Unpaid" status.
- **Overdue** tab shows users with "Overdue" status.

### 2. **Total Payable Amount**

- At the top of the table, the total payable amount is calculated as the sum of the amounts of users with "Unpaid" or "Overdue" status.

### 3. **Search Functionality**

- A search bar above the table allows admins to filter users by name, email, or other available fields.
- The search is done **client-side only**.

### 4. **Row Expansion**

- Each row in the table can be expanded to show additional details about the user.

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory and install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ``
   git clone https://github.com/Kelvin-Kelechi/data-table
   ```
