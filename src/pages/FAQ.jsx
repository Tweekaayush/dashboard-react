import {useState} from 'react'
import Header from '../components/Header'
import {ChevronLeft} from '@mui/icons-material'
import SearchBar from '../components/SearchBar'

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
        <div className="faq-search">
          {/* <h1>How can we help ?</h1> */}
          <SearchBar />
          <h4>
            Can't find your answers? Contact us at 123-456-789 or reach us at help@support.co.in .
          </h4>
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