'use client'
// import { useRouter } from "next/navigation"
export default  function Signup() {
  //  const router = useRouter()


const handleSubmit = async (e) => {
     e.preventDefault()
  const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
   const email = formData.get("email");
  const password= formData.get("password");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
try{
   const res = await fetch("/api/signup/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: name,
    email: email,
    password: password,
  }),
});

      if (!res.ok) {
        console.log("API call failed", res.status);
        return;
      }

      const data = await res.json();
      console.log("Protected API response:", data);
    }catch(error){
      console.log(error)
    }
    
}
      
  return (
    <main>
    <form onSubmit ={handleSubmit}>
        
      <div className = "formDiv">
         <label htmlFor = "name">Name:</label>
      <input
        type="name"
        placeholder="Email"
        name= "name"
    /><br/>
        <label htmlFor = "email">Email:</label>
      <input
        type="email"
        placeholder="Email"
        name= "email"
    /><br/>
    <label htmlFor = "password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
 /><br/>
<button className ="button"type='submit'>Sign up</button>
 </div>
 </form>
</main>
  )
}
