import { BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import AppRoutes from './router/Routes';
import Nav from './components/fragments/nav/Nav'
import Footer from './components/fragments/footer/Footer';

function App() {

  return (
    <Router>
      <div className='h-screen grid grid-rows-layout mx-auto'>
        <nav className="bg-black text-white">
          <Nav />
        </nav>
        <main className=''>
          <AppRoutes />
        </main>
        <footer className="bg-black text-white">
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App