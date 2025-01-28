# Data Table Component

A customizable data table built with Vue 3 and Vite. This component supports expandable rows, dropdown actions, and full-width details.

## Features

- Displays data in a tabular format.
- Expandable rows to show additional details.

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory and install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Build for production:

   ```sh
   npm run build
   ```

5. Preview the production build:

   ```sh
   npm run preview
   ```

## Usage

Include the `data-table` component in your Vue app. Ensure that the `users` data is provided as a prop or fetched dynamically from an API.

### Props

| Prop Name      | Type  | Description                          |
| -------------- | ----- | ------------------------------------ |
| `users`        | Array | Array of user objects for the table. |
| `expandedRows` | Array | Tracks the rows that are expanded.   |

### Sample User Object

Each user object should have the following structure:

```javascript
{
  id: 1,
  date: "2025-01-01",
  activityDetails: "Logged in",
  details: "Active user",
}
```

### Example Template

```vue
<DataTable :users="users" :expandedRows="expandedRows" />
```

## Dropdown Actions

- **Edit:** Opens the edit modal for the user.
- **View Profile:** Redirects to the user's profile page.
- **Activate User:** Activates a user and applies a green highlight.
- **Delete:** Deletes a user with a red highlight for this option.

## Styling

All styles are defined in normal CSS. Update the `styles.css` file to customize the appearance.

## Dependencies

- Vue 3
- Vite
# data-table
