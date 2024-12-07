
import Nav from './Nav';


function Header() {

    return (
      <header>
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/images/my logo.png" alt="Razieh Logo" style={{ width: '80px', height: '60px' }} />
        <h3>Razieh Zarrabi</h3>
      </div> 
     
        <Nav />
      </header>
     
    )
  }

  export default Header;