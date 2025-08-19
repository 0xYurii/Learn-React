import Header from "./components/Header"
import Entry from "./components/Entry"
import data from './data'

export default function App() {

  const item=data.map((id)=>{
    return(<Entry
      img={{
        src:id.img.src,
        alt:id.img.alt
      }}
      title={id.title}
      country={id.country}
      googleMapsLink={id.googleMapsLink}
      dates={id.dates}
      text={id.text}
    />)
  })
    return (
      <main> {item} </main>
    )
}