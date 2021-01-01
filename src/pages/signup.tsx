import { useState, useRef } from "react"

export default function Signup () {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const [message, setMessage] = useState<any>(null)

    async function handleSignup() {
        const resp = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                password: passRef.current?.value
            })
        })
        const json = await resp.json()
        setMessage(JSON.stringify(json))
    }

    return (
        <div>
            {message}
            <h3>Create a new user!</h3>
            <input type="text" placeholder="name" ref={nameRef}/>
            <input type="text" placeholder="email" ref={emailRef}/>
            <input type="password" placeholder="password" ref={passRef}/>
            <button onClick={handleSignup}>Signup</button>
        </div>
    )
}