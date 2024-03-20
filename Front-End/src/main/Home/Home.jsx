// import HousingCards from "../../components/HousingCards/HousingCards"
import Bannier from '../../components/Bannier/Bannier'
import bannierImage from '../../assets/images/korrigan.png'
import Search from '../../components/Form/Search'
// import Form from '../../components/Form/form'
const text1 =
   'La nuit venue, quand les hommes s’enferment à l’abri de leur demeure de pierre, au cœur des villages ou isolés sur la lande, ils laissent la place aux animaux de la nuit...'
const text2 = '...et à leurs compagnons'
const extrait = <span className="chiffre-romain">II</span>
const alt = 'Korrigan en train de lire'
// const extrait1 = 'Extrait- Les korrigans livre'
// const extrait2 = ' - © Pascal Moguérou'
function Home() {
   return (
      <>
         <Search />

         <section className="section_citation">
            <Bannier
               picture={bannierImage}
               alt={alt}
               text={text1}
               text2={text2}
               reference=<cite>
                  {'Extrait- Les korrigans livre 2 ' +
                     extrait +
                     ' - © Pascal Moguérou '}
               </cite>
            />
         </section>
      </>
   )
}

export default Home
