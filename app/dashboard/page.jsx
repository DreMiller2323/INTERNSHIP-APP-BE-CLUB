
import {auth} from '../../lib/auth';
import db from '../../lib/db';

export default   function dashboard() {

const handleSubmit = async (formData) => {
  'use server'
  const session =  await auth()
 if (!session) return <div>Not authenticated</div>
 try{
const fitness_level = formData.get("fitness_level");
const exercise_name = formData.get("exercise_name");
const weight = formData.get("weight");
const reps= formData.get("reps");
const goal= formData.get('goal');

const dataObject ={
fitness_level: fitness_level,
exercise_name: exercise_name,
weight: Number( weight),
reps: Number(reps),
goal: Number(goal)
}
console.log(dataObject)
//mapping each element 
const one_rep_max= weight *(1+reps/30)
//setting the powerlifters plan based off of his one rep  max
//plan is split into4 week intervals the Powerlifter will train at the specified percent of his one rep max
// ie if the weight lifters one rep max on the bench press is 135 h will train at 65% of his one rep max meaning:
// week 1 he would lift no more than 65% of 135 which is 0.65*135=87.75

const phase1 = [0.65, 0.75, 0.80];
const phase2 = [0.75, 0.80, 0.85];
const phase3 = [0.85, 0.90, 0.75];
const phase4= [0.90,0.85,0.80];
const phase5 =[0.70, 0.75, 0.85];
// using the map method we will take the one rep max and multiply it by the percent as a decimal. 
//Math.round function is used to round to the nearest decimal place
// we will take feedback from powerlifters to adjust as some coaches might prefer kg vs pounds//
//The reason for 3 percantages as the lifter will train 3x per week. The powerlifter can pick any three days of the week to train at these numbers, 
const week_one = phase1.map(a=> Math.round(a*one_rep_max)).toString()
const week_two = phase2.map(a=> Math.round(a*one_rep_max)).toString()
const week_three= phase3.map(a=>Math.round(a*one_rep_max)).toString()
const week_four = phase4.map(a=>Math.round(a*one_rep_max)).toString()
const week_five=phase5.map(a=>Math.round(a*one_rep_max)).toString();
//changing the arrays into strings and then into numbers so my sql database can take in plans as VAR CHAR STRINGS 

// const planObj = {
// week1: week1.toString(),
// week2: week2.toString(),
// week3: week3.toString(),
// week4: week4.toString(),
// week5: week5.toString(),
// }

// SELECT [column names] FROM table_name WHERE [row restrictions]
//find user_id confirm it matches 
const userId = session.user.id
    const sql = 'INSERT INTO client_details(user_id,week_one, week_two, week_three, week_four,week_five) VALUES (?,?,?,?,?,?)';
    const [result] = await db.execute(sql, [ userId,week_one, week_two,week_three, week_four,week_five]);
 if (!result) {
        console.log('error getting into db ');
        return;
      }
    
  
    }catch(error){
      console.log(error)
    }
    
}
      
  return (
    <main>
    <form prefetch ='true'action ={handleSubmit}>
        
      <div className = "formDiv">
      <label htmlFor = "name">Exercise Name:</label>
      <input
        type="text"
        placeholder="Exercise that needs improvement "
        name= "exercise_name"
    /><br/>
         <label htmlFor = "name">Fitness Level:</label>
      <input
        type="text"
        placeholder="Fitness Level"
        name= "fitness_level"
    /><br/>
        <label htmlFor = "weight">Weight:</label>
      <input
        type="number"
        placeholder="Weight Lifted"
        name= "weight"
    /><br/>
    <label htmlFor = "reps">Reps:</label>
      <input
        type="reps"
        placeholder="Reps"
        name="reps"
 /><br/>
  <label htmlFor = "reps">Goal:</label>
      <input
        type="number"
        placeholder="Enter Goal Weight"
        name="goal"
 /><br/>
<button className ="button"type='submit'>Plan</button>
 </div>
 </form>
 <div>
  <h1></h1>
 </div>
</main>
  )
}
//     'use server';
// try{
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const result = await signIn('credentials', {
//       email,
//       password,
//       redirect: false, // we handle redirect manually
//     });
