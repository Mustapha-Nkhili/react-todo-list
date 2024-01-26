# React Redux Todo List App


Simple Todo List App with React, Redux.

This is a basic to-do list application built with React for the UI, Redux for state management, nanoid for unique IDs, and FontAwesome for icons.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Features

- Add new tasks to your todo list.
- Mark tasks as completed.
- Remove tasks from the list.
- Responsive design for various screen sizes.
- Uses Nanoid for generating unique task IDs.
- Utilizes Font Awesome for stylish icons.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

```
1. Clone this repository:

  $ git clone git clone https://github.com/Mustapha-Nkhili/react-todo-list.git

2. Navigate to the project directory:

  $ cd react-todo-list

3. install the dependencies:

  $ npm install

4. Start the development server:

  $ npm run dev

5. Open your web browser and go to http://localhost:5173/ to see the app in action.

```

### Usage
 
 1. Add a new task:

    - Type the task in the input field.
    - Press Enter or click the Add icon button.
2. Mark a task as completed:

    - Click the checkbox next to the task.
3. Remove a task:

   - Click the delete (trash) icon next to the task.

## Project Structure

 ```plaintext
react-todo-list-app/
├── src/
|   ├── assets/
│   ├── components/
│   │   ├── AddTodo.jsx
│   │   ├── TodoItem.jsx
|   |   ├── TodoList.jsx
|   ├──features/
|   |   ├── todos/
|   |   |    ├── todosSlice.js
|   ├── actions.js
|   ├── App.css
│   ├── App.jsx
|   ├── index.css
│   ├── main.jsx
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── yarn.lock
```
- src/components/: Contains React components used in the project.
- src/App.jsx: The main application component.
- src/index.jsx: Entry point of the application.
- index.html: Static assets and HTML template.

## Dependencies

- React
- Redux
- Nanoid
- Font Awesome

## Contributing

Feel free to fork this repository and contribute with your ideas and improvements. Make sure to pull requests follow the contributing guidelines.