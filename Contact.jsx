


export default function Contact(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt={`Photo of ${props.name}`}
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone} </p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}


/**
 * Challenge: fix the bug, now that we've 
 * destructured the props object
 */
// export default function Contact({img, name, phone, email}) {
//     return (
//         <article className="contact-card">
//             <img
//                 src={img}
//                 alt="Photo of Mr. Whiskerson"
//             />
//             <h3>{name}</h3>
//             <div className="info-gr oup">
//                 <img
//                     src="./images/phone-icon.png"
//                     alt="phone icon"
//                 />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img
//                     src="./images/mail-icon.png"
//                     alt="mail icon"
//                 />
//                 <p>{email}</p>
//             </div>
//         </article>
//     )
// }

// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(img)