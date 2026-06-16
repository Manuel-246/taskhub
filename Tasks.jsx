
import {useState,useEffect} from 'react';
export default function Tasks(){
const [tasks,setTasks]=useState(()=>JSON.parse(localStorage.getItem('tasks')||'[]'));
const [title,setTitle]=useState('');
const [priority,setPriority]=useState('Medium');
const [search,setSearch]=useState('');
const [edit,setEdit]=useState(null);
useEffect(()=>localStorage.setItem('tasks',JSON.stringify(tasks)),[tasks]);
const save=()=>{
 if(!title.trim()) return;
 if(edit){setTasks(tasks.map(t=>t.id===edit?{...t,title,priority}:t));setEdit(null);}
 else{setTasks([{id:Date.now(),title,priority,completed:false},...tasks]);}
 setTitle('');
};
const filtered=tasks.filter(t=>t.title.toLowerCase().includes(search.toLowerCase()));
return <div>
<h1>✨ Nebula Tasks</h1>
<div className='task-toolbar'>
<input className='search' placeholder='Search tasks...' value={search} onChange={e=>setSearch(e.target.value)}/>
</div>
<div className='glass card'>
<div className='row'>
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Enter task title'/>
<select value={priority} onChange={e=>setPriority(e.target.value)}>
<option>High</option><option>Medium</option><option>Low</option>
</select>
<button className='addBtn' onClick={save}>{edit?'✨ Update Task':'➕ Add Task'}</button>
</div></div>
{filtered.length===0?<div className='card glass'><h3>No Tasks Yet</h3><p>Create your first task.</p></div>:filtered.map(t=>
<div className='taskCard glass' key={t.id}>
<div>
<h3>{t.completed?'✅':''} {t.title}</h3>
<span className={'badge '+t.priority.toLowerCase()}>{t.priority}</span>
</div>
<div className='actionGroup'>
<button className='doneBtn' onClick={()=>setTasks(tasks.map(x=>x.id===t.id?{...x,completed:!x.completed}:x))}>✓ Complete</button>
<button className='editBtn' onClick={()=>{setTitle(t.title);setPriority(t.priority);setEdit(t.id)}}>✏ Edit</button>
<button className='deleteBtn' onClick={()=>setTasks(tasks.filter(x=>x.id!==t.id))}>🗑 Delete</button>
</div>
</div>)}
</div>}
