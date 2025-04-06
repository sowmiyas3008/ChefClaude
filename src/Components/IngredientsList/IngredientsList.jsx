export default function IngredientsList(props){
    const ingredlists = props.ingredients.map(ingred => (<li key={ingred}>{ingred}</li> ))

    return(
        <section>
        <h1>Ingredients on hand:</h1>
        <div className="summa"></div>
        <ul className="ingredients-list">{ingredlists}</ul>
        {props.ingredients.length >3 && <div className="get-recipe-container">
           <div>
           <h3>Ready for a recipe?</h3>
           <div className="summa"></div>
            <p>Generate a recipe from your list of ingredients.</p>
           </div>

            <button onClick = {props.getRecipe}>Get a recipe</button>
            
        </div>}
        
    </section>
    )
}