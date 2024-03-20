import { Link } from 'react-router-dom'
import Erreur from '../../assets/images/404.jpeg'
function Error() {
   return (
      <div className="contener-error">
         <h2>Oups! la page que vous demandez n'existe pas.</h2>
         <img className="erreur" src={Erreur} alt="" />
         <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
   )
}

export default Error
