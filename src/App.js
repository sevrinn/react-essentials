import logo from './logo.svg'
import './App.css'

const Header = () => {
  return (
    <header>
      <h1>Sev's Kitchen</h1>
    </header>
  )
}

const Main = () => {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>It's true</p>
    </footer>
  )
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
