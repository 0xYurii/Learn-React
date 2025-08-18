import ReactDOM from 'react-dom/client';
import App from "./App"

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App />);




// 1. What do props help us accomplish? transver data accros and make it more functional 



// 2. How do you pass a prop into a component? <contact name:    />



// 3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
//    DOM element? (e.g. <div blahblahblah={true}>) Why or why not? no, because dom they ment to be html
   


// 4. How do I receive props in a component?
// function Navbar() {
//     return (
//         <header>
//             {props.key}
//         </header>
//     )
// }


// 5. What data type is `props` when the component receives it? argument