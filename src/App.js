import logo from './logo.svg';
import './App.css';
import Dishes from './dishes';
import Header from './header';
import Footer from './footer';
import Scanebtn from './scanebtn';
import CustomQRScanner from './scanner';
import QRCodeGenerator from './generateqr';

function App() {
  return (
    <div className="App">
      <Header/>
      <QRCodeGenerator />
      <CustomQRScanner/>
      <Dishes/>
      <Footer/>
    </div>
  );
}

export default App;
