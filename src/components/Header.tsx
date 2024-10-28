
import Nav from './Nav';


function Header() {

    return (
      <header>
      <div className="logo">
        <img src="/images/Dino.jpg" alt="Dino Logo" />
         <h3>Razieh Zarrabi</h3>
      </div> 
     
        <Nav />
      </header>
     
    )
  }

  export default Header;