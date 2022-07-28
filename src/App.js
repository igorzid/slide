import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, } from './components';
import { Contact, Header, SortimentList, ProductList, ContactScroll } from './containers';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Header />
          <ContactScroll />
          <Contact />
          <SortimentList />
          <Routes>
        <Route path='/Sortiment'>
          <Route path=':sortimentName' element={<ProductList />}/>
        </Route>          
      </Routes>
    </div>
  );
}

export default App;
