
export default function Dashboard(){
const tasks=JSON.parse(localStorage.getItem('tasks')||'[]');
const completed=tasks.filter(t=>t.completed).length;
const pending=tasks.length-completed;
const rate=tasks.length?Math.round((completed/tasks.length)*100):0;
const recent=[...tasks].slice(0,5);

return <div>
<h1>✨ Nebula Task Hub</h1>
<p>Welcome back. Here's your productivity overview.</p>

<div className='grid'>
<div className='glass statCard'><h3>🚀 Total Tasks</h3><h1>{tasks.length}</h1></div>
<div className='glass statCard'><h3>✅ Completed</h3><h1>{completed}</h1></div>
<div className='glass statCard'><h3>⏳ Pending</h3><h1>{pending}</h1></div>
<div className='glass statCard'><h3>📈 Rate</h3><h1>{rate}%</h1></div>
</div>

<div className='dashboardGrid'>
<div className='glass card'>
<h2>Productivity</h2>
<div className='progress'><div className='progressFill' style={{width:rate+'%'}}></div></div>
<p>{rate}% completion rate</p>
</div>

<div className='glass card'>
<h2>Recent Tasks</h2>
{recent.length===0?<p>No tasks yet. Add tasks from Tasks page.</p>:
recent.map(t=><div key={t.id} className='recentTask'>{t.completed?'✅':'⬜'} {t.title}</div>)}
</div>
</div>
</div>
}
