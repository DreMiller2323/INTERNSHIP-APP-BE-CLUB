
//imported client component fitness page so we can use a server component and secure the route all data from fitness will be rendered here. 
import Plan from '../fitness/page'
import {auth} from '../../../lib/auth';
import {Suspense} from 'react'

  const session =  await auth()
 if (!session) return <div>Not authenticated</div>
export default  function Page() {
    return (
        <div>
        <Plan/>
 </div>
    );
}
