import logo from './logo.svg'
import './App.css'
import restaurant from './images/restaurant.jpg'

const dishes = [
  'Mac and Cheez',
  'Mushroom Yum Yum',
  'Tofu with Vegetable',
  'Minestrone',
]

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }))

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
      <img src={restaurant} alt='restaurant' style={{ width: '300px' }} />
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
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

function App() {
  return (
    <div className='App'>
      <Header name='Frogger' />
      <Main adjective='amazing' dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App
