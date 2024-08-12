import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { addTodo, deleteTodo } from '../features/todoSlice';
import { convertDate } from '../module';
import {Delete} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const Calendar = ({eleRef}) => {

  const ref= useRef(0)
  const [selected, setSelected] = useState(new Set())
  const {theme} = useSelector(state => state.theme)
  const {todos} = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    date: dayjs(new Date())
  })
  const {pathname} = useLocation()

  const handleSelected = (e, id) =>{
    const status = e.target.checked
    if(status){
      setSelected(new Set([...selected, id]))
      if(selected.size + 1 === todos.length)
        setSelected(new Set(todos.map((todo) => todo.id)))
    }else{
      if(selected.has(id)){
        let s = selected
        s.delete(id)
        setSelected(new Set([...s]))
      }
    }
  }

  const handleSelectAll = (e) =>{
    if(e.target.checked){
      setSelected(new Set(todos.map((todo) => todo.id)))
    }else{
      setSelected(new Set())
    }
  }


  const handleDelete= () =>{
    if(!selected.size) return

    dispatch(deleteTodo(selected))
    setSelected(new Set())
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!todo.task) return
    dispatch(addTodo({...todo, id: new Date().getTime(), date: new Date(todo.date)}))
    setTodo({
      id: '',
      task: '',
      date: dayjs(new Date())
    })
  }

  useEffect(() => {
    if (!eleRef.current) return;
    const resizeObserver = new ResizeObserver(() => { 
      if(pathname !== '/calendar') return
      clearTimeout(eleRef.current)
      setTimeout(()=>{
        const width = eleRef.current.clientWidth
        if(width<950){
          ref.current.classList.add('calendar-container-2')
        }else{
          ref.current.classList.remove('calendar-container-2')
        }
        
      }, 200)
    });
    resizeObserver.observe(eleRef.current);
    return () => resizeObserver.disconnect();
  }, [eleRef, pathname]);


  return (
    <div className="container">
        <div>
            <Header title='CALENDAR' subtitle='Full Calendar Interactive Page'/>
        </div>
        <div className='calendar-container' ref={ref}>
          <div className="todo-list-container">
            <h2>
              My Tasks
            </h2>
            <div className="todo-options">
              <label>
                <input type="checkbox" name="selectAll" id="selectAll" onChange={handleSelectAll} checked={selected.size === todos.length && todos.length}/>
                <span></span>
                <h6>({selected.size}) Selected</h6>
              </label>
              <Delete onClick={handleDelete}/>
            </div>
            <ul className="todo-list">
              {
                todos && todos?.map((todo, i)=>{
                  return (
                    <li className='todo-item' key={todo.id}>
                      <label className="todo-left">
                          <input type="checkbox" name="selected" onChange={(e) => handleSelected(e, todo.id)} checked={selected.has(todo.id)}/>
                          <span></span>
                      </label>
                      <div className="todo-right">
                        <h6>
                          {convertDate(todo.date)} 
                        </h6>
                        <h4>
                          {todo.task}
                        </h4>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='create-todo-container'>
              <h2>
                Add New Task
              </h2>
              <form action="" onSubmit={handleSubmit}>
                <input type="text" name="task" id="task" value={todo.task} onChange={e => setTodo({...todo, [e.target.name]: e.target.value})} placeholder='Type new task here...'/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker 
                    value={todo.date}
                    onChange={(newValue) => setTodo({...todo, date: dayjs(newValue)})}
                    sx={{
                      "& .MuiPickersLayout-root": {
                        border: '1px solid #a4a9fc'
                      },
                      "& .MuiPickersToolbar-root": { 
                        backgroundColor: theme==='dark'?'#3e4396':'#a4a9fc', 
                      },
                      "& .MuiTypography-root": {
                        color: theme==='dark'? '#e0e0e0':'#141414'
                      },
                      "& .MuiButtonBase-root.Mui-selected": {
                        backgroundColor: theme==='dark'?'#3e4396':'#a4a9fc', 
                        color: theme==='dark'? '#e0e0e0':'#141414'
                      },
                      "& .MuiPickersLayout-contentWrapper": {
                        backgroundColor: '#e1e2fe'
                      },
                      "& .MuiDialogActions-root":{
                        backgroundColor: '#e1e2fe'
                      }
                    }}
                  />
                </LocalizationProvider>
                <input type="submit" value="Add Task" />
              </form>
          </div>
        </div>
    </div>
  )
}

export default Calendar