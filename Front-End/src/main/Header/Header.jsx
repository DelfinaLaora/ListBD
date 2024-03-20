import { Link } from 'react-router-dom'
// import Logo from '../../assets/images/logo-couleur.png'

function Header() {
   return (
      <header className="header-contener">
         {/* <img className="header-logo" src={Logo} alt="Logo de kasa" /> */}
         <div>
            <Link to="/">Accueil</Link>
            <Link to="/MesBD">Mes BD</Link>
         </div>
      </header>
   )
}

export default Header
