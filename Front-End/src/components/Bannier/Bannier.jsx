import PropTypes from 'prop-types'
function Bannier({ picture, alt, text, text2, reference }) {
   if (!text2) {
      return (
         <>
            <img className="picture" src={picture} alt={alt} />
            <blockquote className="citation">
               <p>{text}</p>
               <br />
               <cite>{reference}</cite>
            </blockquote>
         </>
      )
   } else {
      return (
         <>
            <img className="picture" src={picture} alt={alt} />
            <blockquote className="citation">
               <p>{text}</p>
               <br />
               <p>{text2}</p>
               <br />
               <cite>{reference}</cite>
            </blockquote>
         </>
      )
   }
}

Bannier.propType = {
   picture: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   text2: PropTypes.string.isRequired,
   reference: PropTypes.string.isRequired,
}

export default Bannier
