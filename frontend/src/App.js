import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Dishes from './dishes';
import QRCodeGenerator from './generateqr';
import CustomQRScanner from './scanner';

function App() {
  return (
    <div className="App">
      <Header/>
      <QRCodeGenerator/>
      <CustomQRScanner/>
      <Dishes/>
      <Footer/>
    </div>
  );
}

export default App;
