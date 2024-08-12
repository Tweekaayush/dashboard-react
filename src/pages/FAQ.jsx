import {useState} from 'react'
import Header from '../components/Header'
import {ChevronLeft} from '@mui/icons-material'

const Accordian = ({question, answer}) =>{
  const [expand, setExpand] = useState(false)
  return (
    <div className={expand?'accordian accordian-active':'accordian'}>
      <div className="accordian-question" onClick={()=>setExpand(!expand)}>
        <h3>
          {question}
        </h3>
        <button>
          <ChevronLeft/>
        </button>
      </div>
      <div className="accordian-answer">
        <h4>
          {answer}
        </h4>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <div className="container">
        <div>
          <Header title='FAQ' subtitle='Frequently Asked Questions Page'/>
        </div>
        <div className="question-list">
          <Accordian 
            question='This is a question ?'
            answer = '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nemo quidem omnis accusantium, fugit ea.'
          />
          <Accordian 
            question='This is a question ?'
            answer = '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nemo quidem omnis accusantium, fugit ea.'
          />
          <Accordian 
            question='This is a question ?'
            answer = '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nemo quidem omnis accusantium, fugit ea.'
          />
          <Accordian 
            question='This is a question ?'
            answer = '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nemo quidem omnis accusantium, fugit ea.'
          />
        </div>
    </div>
  )
}

export default FAQ