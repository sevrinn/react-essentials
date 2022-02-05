import logo from './logo.svg'
import './App.css'

const Header = (props) => {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

const Main = (props) => {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{ textAlign: 'left' }}>
        {dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
    </section>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  'Mac and Cheez',
  'Mushroom Yum Yum',
  'Tofu with Vegetable',
  'Minestrone',
]

function App() {
  return (
    <div className='App'>
      <Header name='Frogger' />
      <Main adjective='amazing' dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App
