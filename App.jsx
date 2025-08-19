import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    
    /**
     * Challenge: See if you can correctly pass the necessary props to the 
     * Joke component in the .map() (and render the jokeElements array) so 
     * the jokes show up on the page again
     */
    
    const jokeElements = jokesData.map((joke) => {
        return <Joke 
          setup={Joke.setup}
          puchline={Joke.puchline}
        />
    })
    return (
        <main>
            {jokeElements}
        </main>
    )
}
// 1. What does the `.map()` array method do?
// take one item from array and turned it into component

// 2. What do we usually use `.map()` for in React?
// to turn array to elemetns 



// 3. Critical thinking: why is using `.map()` better than just
//    creating the components manually by typing them out?

// .map() is used for auto and fucntionality