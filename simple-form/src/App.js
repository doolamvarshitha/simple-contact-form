import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault() 
    setSuccessMessage(`Thank you, ${name}! Your message has been sent.`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className='container'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
      {successMessage && (
        <div className='success-message'>{successMessage}</div>
      )}
    </div>
  )
}

export default App
