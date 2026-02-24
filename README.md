# Task Management Application

A full-stack web application for creating, viewing, editing, and deleting text-based tasks/files.

## Features

- ✅ Create tasks with title and description
- 📖 View all tasks and their details
- ✏️ Edit file names
- 🗑️ Delete tasks
- 🔒 Form validation (submit button disabled when title is empty)

## Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **File System**: Node.js fs module for file operations

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd backendtest
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
backendtest/
├── index.js              # Main server file
├── package.json          # Dependencies
├── files/                # Task files storage
├── views/                # EJS templates
│   ├── index.ejs        # Home page
│   ├── show.ejs         # File detail view
│   └── edit.ejs         # Edit form
└── public/              # Static assets
    └── javascripts/
        └── script.js    # Client-side validation
```

## Routes

- `GET /` - Home page (list all tasks)
- `GET /file/:filename` - View file content
- `GET /edit/:filename` - Edit file name form
- `GET /delete/:filename` - Delete a file
- `POST /create` - Create new task
- `POST /edit` - Update file name

## License

ISC

