import {auth} from '../../../lib/auth';
export default async function page() {
  //verifies if user has session if not will sent not authed method 
  const session =auth();
  if(!session)return<div> Not Authed </div>

   async function plan() {
    //get request to  my backend api for the user data 
  try {
    const response = await fetch('http://localhost:3000/api/fitness',{
      method:'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
console.log(error)
  }
}
//display user data 
 
  return (
    <div>
      <h1>{plan.week_one}</h1>
      <p>{plan.week_two}</p>
    </div>
  )
}