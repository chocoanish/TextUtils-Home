import React, {useState} from 'react'

export default function About() {

    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const[btnText, setBtnText] = useState("Enable Dark mode")

    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    return (
        <div style={myStyle}>
            <h1 className="text-center" style={myStyle}>About Us</h1>
            {/* <img src="%PUBLIC_URL%/Profile.jpg" alt='' className='img-thumbnail'/> */}
            <p className="text-right" style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt quod delectus culpa deleniti minima vel mollitia. Itaque, aliquam fugit. Quis maiores officia quaerat iste sint enim reiciendis porro hic tempora, odio inventore. Nulla facilis, debitis alias laborum beatae voluptatum recusandae, maiores, consequuntur voluptatibus quisquam eos rerum voluptatem vitae tempore.</p>
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div>
    )
}
