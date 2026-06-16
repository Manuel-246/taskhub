
import {Routes,Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Review from './pages/Review';
export default function App(){
return <div className='layout'><Sidebar/><div className='content'>
<Routes>
<Route path='/' element={<Dashboard/>}/>
<Route path='/tasks' element={<Tasks/>}/>
<Route path='/review' element={<Review/>}/>
</Routes></div></div>
}
