# JSL03 Project - Console-Based Task Manager

## Overview
This project implements a **console-based task management system** that allows users to manage tasks using prompts and console output. The program lets users add up to three new tasks to an existing list, assigns unique incremental IDs, and filters completed tasks for easy viewing.

## Features
- Tasks are stored as **objects in an array** with structured properties:
  - `id`
  - `title`
  - `description`
  - `status`
- Users can **add up to three new tasks** through interactive prompts.
- Each new task gets a **unique ID** automatically assigned.
- **Validation** ensures the `status` is only `"todo"`, `"doing"`, or `"done"`.
- After all inputs, the program:
  - Logs **all tasks** in the console under a clear header.
  - Logs **completed tasks** (status `"done"`) separately.
  - Displays an **alert** message once the board reaches the limit.

## Instructions for Use
1. Open the project folder and ensure all files are in place.
2. Open the HTML file in your browser.
3. When prompted:
   - Enter task details: title, description, and status.
   - Repeat up to three times.
4. After completion, check your browser **console** (F12 or Inspect → Console) to view all and completed tasks.

## Alert Message
After the third task is entered, the program displays:
> "There are enough tasks on your board, please check them in the console."

## Example Console Output
```
========== ALL TASKS ==========
[
  { id: 1, title: "Launch Epic Career", status: "todo" },
  { id: 2, title: "Master JavaScript", status: "doing" },
  { id: 3, title: "Contribute to Open Source Projects", status: "done" },
  { id: 4, title: "Learn React", status: "done" }
]

======= COMPLETED TASKS =======
[
  { id: 3, title: "Contribute to Open Source Projects", status: "done" },
  { id: 4, title: "Learn React", status: "done" }
]
```

## Files Included
- `index.html` — Runs the task manager in browser.
- `scripts.js` — Contains all logic for managing tasks.
- `styles.css` — Optional styling (not required for console project).
- `README.md` — Project documentation (this file).

## Author
**Lukhanyiso Tshangela**  
JSL03 – JavaScript Logic Module 
