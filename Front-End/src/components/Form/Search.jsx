function Search() {
   return (
      <>
         <form className="formulaire">
            <div className="input-wrapper">
               <label htmlFor="title">Titre</label>
               <input type="text" id="title" name="title" />
            </div>
            <div className="input-wrapper">
               <label htmlFor="author">Auteur</label>
               <input type="text" id="author" name="author" />
            </div>
            <div className="input-wrapper">
               <label htmlFor="publisher">Editeur</label>
               <input type="text" id="publisher" name="publisher" />
            </div>
            <div className="input-wrapper">
               <label htmlFor="collection">Collection</label>
               <input type="text" id="collection" name="collection" />
            </div>

            <div className="input-wrapper">
               <label htmlFor="category">Catégorie</label>
               <input type="text" id="category" name="category" />
            </div>
            <div className="input-wrapper">
               <label htmlFor="isbn">ISBN</label>
               <input type="text" id="isbn" name="isbn" />
            </div>
            <div className="input-wrapper">
               <label htmlFor="publicationDate">Date de publication</label>
               <input type="text" id="publicationDate" name="publicationDate" />
            </div>
            <div className="input-wrapper">
               <button>Recherche</button>
               <button>Ajouter</button>
            </div>
         </form>
      </>
   )
}

export default Search
