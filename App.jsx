import Header from "./components/Header"
import Entry from "./components/Entry"
import data from './data'

export default function App() {

  const item=data.map((id)=>{
    return(<Entry
      key={id.id}
      id={id}
    />)
  })
    return (
      <>
      <Header/>
      <main className="container"> {item} </main>
      </>
    )
}