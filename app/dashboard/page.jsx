
import {auth} from '../../lib/auth';
import db from '../../lib/db';

export  default async  function dashboard() {
  const session =  await auth()
 if (!session) return <div>Not authenticated</div>
const handleSubmit = async (formData) => {
  'use server'

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
console.log(dataObject);
//mapping each element 
  
const one_rep_max= weight *(1+reps/30);
const split1= "Sets:5 Reps:5"
const split2 ="Sets:5 Reps:5"
const split3= "Sets:5 Reps:5"
const split4 ="Sets:5 Reps:5"
const split5 ="Sets:3 Reps:3"
const split6 ="Test One Rep Max, Please use a spotter! Submit progress to fitness intake form, remember even small gains are one step closer to your goal!"; 

const phase1 = [0.65, 0.75, 0.80, 0.85, 0.75];
const phase2 = [0.75, 0.80, 0.85, 0.85, 0.80];
const phase3 = [0.85, 0.90, 0.75];
const phase4= [0.85,0.90,0.75];
const phase5 =[0.70, 0.75, 0.85];


// using the map method we will take the one rep max and multiply it by the percent as a decimal. 
//Math.round function is used to round to the nearest decimal place
// we will take feedback from powerlifters to adjust as some coaches might prefer kg vs pounds//
//The reason for 3 percantages as the lifter will train 3x per week. The powerlifter can pick any three days of the week to train at these numbers, 
const weekOne= phase1.map(a=> Math.round(a*one_rep_max))
const weekTwo= phase2.map(a=> Math.round(a*one_rep_max))
const weekThree= phase3.map(a=>Math.round(a*one_rep_max))
const weekFour = phase4.map(a=>Math.round(a*one_rep_max))
const weekFive=phase5.map(a=>Math.round(a*one_rep_max))
const weekSix=phase5.map(a=>Math.round(a*one_rep_max))
//using the fundamentals of javascript using ... spread operator to get all elements of the weeks and putting split1 and weekone in an an array wwith | for neatness when retreived on front end
const week_one= [split1, ...weekOne].join('|')
const week_two= [split2, ...weekTwo].join('|')
const week_three= [split3, ...weekThree].join('|')
const week_four= [split4, ...weekFour].join('|')
const week_five= [split5, ...weekFive].join('|')
const week_six=  [split6, ...weekSix].join('|')

// changing the arrays into strings and then into numbers so my sql database can take in plans as VAR CHAR STRINGS 

const userId = session.user.id
    const sql = 'INSERT INTO client_details(user_id,exercise_name,week_one, week_two, week_three, week_four,week_five,week_six,one_rep_max,fitness_level) VALUES (?,?,?,?,?,?,?,?,?,?)';
    const [result] = await db.execute(sql, [ userId, exercise_name, week_one, week_two,week_three, week_four,week_five, week_six, one_rep_max,fitness_level]);
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
      <div>
        Step1: Enter compound lift you want stronger!
        Step2: Enter your current fitness level.
        Step3: Enter the amount reps completed our one rep max calculator will determine your one rep max. 
        Step4: Enter your goal weight
        Step: 6 Get the ultimate strength training guide!
 </div>
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
