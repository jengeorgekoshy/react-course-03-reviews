import { useState } from 'react'
import {
  FaQuoteRight,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from 'react-icons/fa'
import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const handleRightClick = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length
      return newIndex
    })
  }

  const handleLeftClick = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length
      return newIndex
    })
  }

  const handleSurpriseClick = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(randomNumber % people.length)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn">
            <FaChevronCircleLeft onClick={handleLeftClick} />
          </button>
          <button type="button" className="next-btn" onClick={handleRightClick}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={handleSurpriseClick}>
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App
