
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.id.img.src} 
                    alt={props.id.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.id.country}</span>
                <a href={props.id.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.id.title}</h2>
                <p className="trip-dates">{props.id.dates}</p>
                <p className="entry-text">{props.id.text}</p>
            </div>
            
        </article>
    )
}