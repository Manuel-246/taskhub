
import {NavLink} from 'react-router-dom';
export default function Sidebar(){
return <aside className='sidebar'>
<h2>TaskPro</h2>
<NavLink to='/'>Dashboard</NavLink>
<NavLink to='/tasks'>Tasks</NavLink>
<NavLink to='/review'>Review</NavLink>
</aside>
}
