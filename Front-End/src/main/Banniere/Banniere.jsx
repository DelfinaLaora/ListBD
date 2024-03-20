import ContenerBannier from '../../components/Bannier/ContenerBannier'
import bannierImage from '../../assets/images/Image-banniere.webp'

function Bannier() {
   return (
      <>
         <ContenerBannier
            title={
               '“La lecture, une porte ouverte sur un monde enchanté.” François Mauriac'
            }
            picture={bannierImage}
         />
      </>
   )
}

export default Bannier
