


/**
 * Challenge: Think critically - how would you pass in a prop that 
 * isn't a string datatype.
 * 
 * E.g. Say you want each Joke component to receive an "upvotes" 
 * and "downvotes" prop that is a number, as well as a prop with 
 * an array of comments, and a boolean of whether the joke is a 
 * pun (`isPun`).
 */

import Joke from "./Joke";

export default function App() {
    return (
        <main>
          <Joke
            setup="I got my daughter a fridge for her birthday."
            puchline="I can't wait to see her face light up when she opens it."
            pun={true}
          />
          <Joke
            setup="How did the hacker escape the police?"
            puchline="He just ransomware!"
            pun={true}
          />
          <Joke
            setup="Why don't pirates travel on mountain roads?"
            puchline="Scurvy."
            pun={false}
          />
          <Joke
            setup="What's the best thing about Switzerland?"
            puchline="I don't know, but the flag is a big plus!"
            pun={true}
          />
        </main>
    )
}



/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */