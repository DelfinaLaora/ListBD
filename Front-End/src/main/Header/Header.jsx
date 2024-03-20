import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logoMiel.png'
const magnifier = (
   <svg
      className="icon-loupe"
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 512 512"
   >
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
   </svg>
)
// !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
function Header() {
   return (
      <header>
         <Link to="/">
            <img className="logo" src={Logo} alt="logo famille" />
         </Link>
         <input className="recherche" type="text" />

         {magnifier}
         <Link to="/albums">
            <h1>Nos bandes dessinées</h1>
         </Link>
      </header>
   )
}

export default Header
