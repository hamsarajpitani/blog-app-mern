import { useState } from "react"

const Signin = () => {
    const [user, setUser] = useState({
        name:"",
        password:"",
    }) 

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(user)
    }
    
    return (
        <>
            <div class="login-div flex-column-centered">
                <div class="login-comps">
                    <h1 class="text-center">Login</h1>
                    <form onSubmit={handleSubmit} class="flex-column-centered">
                        <input type="text" name="name" id="user" value={user.name}  onChange={handleChange}  placeholder="Username" required />
                        <input type="password" name="password" id="password"  value={user.password} onChange={handleChange} placeholder="Password" required />
                        <input type="submit" value="Login" />
                    </form>
                    <a href="#">
                        <p class="text-center">Forgot Password?</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Signin
