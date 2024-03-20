// import HousingCards from "../../components/HousingCards/HousingCards"
import Bannier from '../../components/Bannier/Bannier'
import bannierImage from '../../assets/images/Image-banniere.webp'

function Home() {
   return (
      <>
         <Bannier
            title={
               '“La lecture, une porte ouverte sur un monde enchanté.” François Mauriac'
            }
            picture={bannierImage}
         />
         {/* <BDCards /> */}
      </>
   )
}

export default Home
