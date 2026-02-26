 //and expose our data out here.
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((r) => r.json())

export default   function Plan() {

  const { data, error, isLoading } = useSWR(
    '/api/fitnessAnalytics',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if(!data) return <div>Please see Fitness Intake age</div>
  console.log(data)
  return (

  <div className='plan'>
  <h1>Page is working </h1>
{/* {data.map((plan) => (
  
  <div key={plan.id}>Week1: {` ${plan.week_one} IBS`}</div>
))}
<div>
    {data.map((plan) => (
        <div key={plan.id}>Week 2: {` ${plan.week_two} IBS`}</div> ))}
</div>
<div>
    {data.map((plan) => (
        <div key={plan.id}> Week 3: {` ${plan.week_three} IBS`}</div>
 ))}
</div> */}
</div>
    );
}