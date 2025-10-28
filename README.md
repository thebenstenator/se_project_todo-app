# Simple Todo App

A clean, interactive todo list application built with vanilla JavaScript and object-oriented programming principles. Users can add tasks with optional due dates, mark them as complete, and delete them when finished.

## Features

- ✅ Add new todo items with custom names
- 📅 Set optional due dates for tasks
- ✓ Mark todos as complete/incomplete with checkbox toggle
- 🗑️ Delete todos with one click
- ✏️ Real-time form validation with visual feedback
- 📱 Responsive design that works on all devices
- 💾 Clean UI with modern styling

## Functionality

This todo app demonstrates core frontend development skills through:

**Dynamic Todo Management**: Users can create new todos through a modal form. Each todo displays its name, optional due date, completion status, and a delete button. Todos are rendered from a reusable template and managed through JavaScript classes.

**Form Validation**: The add todo form includes client-side validation that checks for required fields and provides real-time error messages. The submit button is disabled until all fields are valid, preventing invalid submissions.

**Interactive Elements**: Todos can be marked complete by clicking the checkbox, updating the task's status. The delete button removes todos from the DOM instantly, providing immediate visual feedback.

## Technology

**Languages & Architecture:**

- HTML5 (semantic markup)
- CSS3 (BEM methodology, modular architecture)
- JavaScript ES6+ (classes, modules, arrow functions)

**JavaScript Techniques:**

- **Object-Oriented Programming**: `Todo` and `FormValidator` classes encapsulate functionality
- **ES6 Modules**: Code organized into separate files and imported as needed
- **Template Cloning**: Using `<template>` elements for efficient DOM manipulation
- **Event Delegation**: Efficient event handling for dynamic elements
- **Form Validation API**: Built-in browser validation with custom error messaging

**Key Features:**

- UUID generation for unique todo IDs
- Date formatting with JavaScript Date API
- Modal management (open/close with overlay)

## Project Structure

This project is deployed on [GitHub Pages](https://thebenstenator.github.io/se_project_todo-app/):
