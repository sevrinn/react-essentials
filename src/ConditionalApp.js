import logo from './logo.svg'
import './App.css'
import restaurant from './images/restaurant.jpg'

const SecretComponent = () => {
  return <h1>Secret info for authorized users only</h1>
}

const RegularComponent = () => {
  return <h1>Everyone can see this component</h1>
}

function ConditionalApp(props) {
  return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>
}

export default ConditionalApp
