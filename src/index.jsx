import '../assets/stylesheets/application.scss';
import { createRoot } from "react-dom/client";
import React from 'react';
import App from '../src/components/App';

// 1. How to render react
// 2. How to create a React component
// 3. How to customize a component with props
// 4. How to breakdown our app into nested components (in different files)
// 5. How to refactor the components with props and iterations
// 6. How to handle event with states (React hook states = useState())


const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

// const Hello = ({ name, job }) => {
//   // SAME AS above in params
//   // const name = props.name;
//   // const job = props.job;
//   // SAME AS below
//   // const { name, job } = props;

//   // console.log(props);
//   return (
//     <h1>Hi, I'm {name} working as a {job}!</h1>
//   );
// };
