# Dev Stack Builder

## Introduction to The Project 

My Assignment 5 project is Dev Stack Builder. A small web application where users can see multiple technologies and come up with their stack.

The project is coded in React and TypeScript, with an aim towards simplicity and responsive design.

## Technologies Applied

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## Functionalities

- Users can see many technologies along with their category, difficulty, rating, and description.
- Users can stack the technologies into their own stack and eliminate those when they want.
- The website is responsive and can run on mobile, tablet, and desktop versions.

## React FAQs

### 1. What is JSX, and why is it used in React? 

JSX enables to write HTML-like syntax while coding in JavaScript or TypeScript. It is a great tool in React to simplify UI authoring.

### 2. What is the difference between props and state? 

Props are responsible for passing data from the parent component to the child component, whereas state refers to the data existing within the component and changing with time.

### 3. What does the useState hook do, and where did you use it in this project?

The purpose of useState hook is to define a variable and make it reactive in the component. In my project, I used useState function to create and store the list of technologies, selected technologies, and loading state. 

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?


The functionality of useEffect is to execute code after the component has been rendered. In this situation, I needed useEffect to fetch technology data from some local JSON file in Technology section. 

### 5. Why does every item in a .map() list need a unique key prop?

The key prop is important because it makes it possible for React to keep track of the elements that belong to the list and to update some particular element of the list.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message). 

Conditional Rendering means showing different interfaces to the user according to a particular condition.

For my application, I used conditional rendering in my "YourStack" component. In case there are no chosen technologies, it will show "Your stack is empty" instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is sent to the child via props from the parent. The child can send the data back through the props using a method provided by the parent.

In this case, the TechnologySection component sends relevant information and methods to its children, TechnologyCard and YourStack.

## Application Structure

```text
src/
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── TechnologyCard.tsx
│   ├── TechnologySection.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
├── assets/
├── App.tsx
└── index.css

public/
└── technologies.json
```


## Author

Nibir Shafuan