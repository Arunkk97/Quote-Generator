
import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState({
    text: 'Failure will never overtake me if my determination to succeed is strong enough',
    author: 'APJ Abdul Kalam'
  })

  const generateQuote = async () => {

   
    fetch('https://type.fit/api/quotes').then((response) => {
      response.json().then((result) => {
        const random = result[Math.floor(Math.random() * result.length)]
        setQuote(random)
        console.log(random);

      })
    })

  }



  return (
    <>
      <div className='bgimg'>
        <div className='d-flex justify-content-center pt-5 head '>
          <h1 className=' head'>Quote Generator</h1>
        </div>

       <div className='container content'>
          <div className='quote text-center '>{quote.text}</div>
          <div className='author text-center mb-5'>-{quote.author.split(',')[0]}</div>

        </div>

        <div className='d-flex justify-content-center mt-5'>
          <button onClick={generateQuote} className='btn btn-success text-light p-2 '> <i class="fa-solid fa-rotate"></i> Generate Quote</button>
        </div>

      </div>
    </>
  )
}

export default App
