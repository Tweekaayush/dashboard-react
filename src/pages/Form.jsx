import {useState} from 'react'
import Header from '../components/Header'

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address: ''
  })
  const [formError, setFormError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address: ''
  })
  const handleSubmit = () => {}

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleBlur = (e) =>{
  
    const {name, value} = e.target
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    switch(name){
      case 'firstName': 
        if(value === ''){
            setFormError({...formError, [name]: 'Required'})
            document.getElementById(name).style.border = '1px solid #af3f3b'
          }
        else{ 
            setFormError({...formError, [name]: ''})
            document.getElementById(name).style.border = 'none'
            document.getElementById(name).style.borderBottom = '1px solid #666666'
          }
        break
      case 'lastName': 
        if(value === ''){ 
          setFormError({...formError, [name]: 'Required'})
          document.getElementById(name).style.border = '1px solid #af3f3b'
        }
        else {
          setFormError({...formError, [name]: ''})
          document.getElementById(name).style.border = 'none'
          document.getElementById(name).style.borderBottom = '1px solid #666666'
        }
        break
      case 'email': 
        if(value === ''){ 
          setFormError({...formError, [name]: 'Required'})
          document.getElementById(name).style.border = '1px solid #af3f3b'
        }
        else if(!pattern.test(value)){ 
          setFormError({...formError, [name]: 'Enter a Valid Email'})
          document.getElementById(name).style.border = '1px solid #af3f3b'
        }
        else{ 
          setFormError({...formError, [name]: ''})
          document.getElementById(name).style.border = 'none'
          document.getElementById(name).style.borderBottom = '1px solid #666666'
        }
        break
      case 'contact': 
        if(value === ''){ 
          setFormError({...formError, [name]: 'Required'})
          document.getElementById(name).style.border = '1px solid #af3f3b'
        }
        else if(String(value).length !== 10 ){ 
          setFormError({...formError, [name]: 'Enter a Valid Contact Number'}) 
          document.getElementById(name).style.border = '1px solid #af3f3b'
        }
        else{
          setFormError({...formError, [name]: ''})
          document.getElementById(name).style.border = 'none'
                    document.getElementById(name).style.borderBottom = '1px solid #666666'
        }
        break
      case 'address': 
        if(value === ''){ 
          setFormError({...formError, [name]: 'Required'})
          document.getElementById(name).style.border = '1px solid #af3f3b'
        }
        else {
          setFormError({...formError, [name]: ''})
          document.getElementById(name).style.border = 'none'
          document.getElementById(name).style.borderBottom = '1px solid #666666'
        }
        break
      default: console.log('No such field exists')
    }

  }

  return (
    <div className="container">
        <div>
          <Header title='CREATE USER' subtitle='Create a New User Profile'/>
        </div>
        <form action="" onSubmit={handleSubmit} className='user-form'>
          <div>
            <div className="input-field">
              <input type="text" name="firstName" id="firstName" placeholder='First Name' value={formData?.firstName} onChange={handleChange} onBlur={handleBlur}/>
              { formError?.firstName && <span className="form-error">*{formError.firstName}</span>}
            </div>
            <div className="input-field">
              <input type="text" name="lastName" id="lastName" placeholder='Last Name' value={formData?.lastName} onChange={handleChange} onBlur={handleBlur}/>
              { formError.lastName && <span className="form-error">*{formError.lastName}</span>}
            </div>
          </div>
          <div className="input-field">
            <input type="email" name="email" id="email" placeholder='Email' value={formData?.email} onChange={handleChange} onBlur={handleBlur}/>
             {formError?.email && <span className="form-error">*{formError.email}</span>}
          </div>
          <div className="input-field">
            <input type="number" name="contact" id="contact" placeholder='Contact Number' value={formData?.contact} onChange={handleChange} onBlur={handleBlur}/>
            {formError?.contact && <span className="form-error">{formError.contact}</span>}
          </div>
          <div className="input-field">
            <input type="text" name="address" id="address" placeholder='Address' value={formData?.address} onChange={handleChange} onBlur={handleBlur}/>
            { formError?.address && <span className="form-error">{formError.address}</span>}
          </div>
          <input type="submit" value="CREATE NEW USER" />
        </form>
    </div>
  )
}

export default Form