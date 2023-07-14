import AboutMain from './components/about/AboutMain';
import Primaryhdr from './components/header/Primaryhdr';
import HomeMain from './components/home/HomeMain';
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Primaryhdr />
      <Routes>
        <Route path='/flexi-blocks/' element={ <HomeMain /> } />
        <Route path='/flexi-blocks/about' element={ <AboutMain />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
