import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Dishes from './dishes';
import QRCodeGenerator from './generateqr';
import CustomQRScanner from './scanner';
import SendTextRequest from './sendrequest';

function App() {
  return (
    <div className="App">
      <Header/>
      <CustomQRScanner/>
      <SendTextRequest/>
      <Dishes/>
      <Footer/>
    </div>
  );
}

export default App;
