import React from 'react' 
import "./Main.css" 
import IngredientsList from "../IngredientsList/IngredientsList"
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe"
import { getRecipeFromMistral } from "../../ai.js"


const Main = () => {
    // const ingredients = ["aa", "bb", "cc"]
    // const newingredient = ingredients.map(ing => (
    //     <li key={ing}>{ing}</li>
    // ))

    // function handlesubmit(event){
    //     event.preventDefault()
    //     const formdata = new FormData(event.currentTarget)
    //     const newingredient = formdata.get("ingredient")
    //     console.log(ingredients);
    // }

    const[ingredients,setIngredients] = React.useState([])

    const[recipe, setRecipe] = React.useState("")

    // const ingredlists = ingredients.map(ingred => (<li key={ingred}>{ingred}</li> ))


    async function getRecipe() {
        // console.log("Getting recipe for ingredients:", ingredients)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        // console.log("Recipe Markdown:", recipeMarkdown)
    }


    function addingredient(formData){
        const newingredient = formData.get("ingredient")
        setIngredients(preving => [...preving,newingredient])

    }


    
    return(
        <div className="main">
            <div className='summa'></div>

            
            <form action={addingredient}>
                <input
                type="text"
                placeholder="e.g.oregano"
                name="ingredient"
                aria-label="Add Ingredient"
                />
                <button className='addbtn'> + Add Ingredient </button>
            </form>
            
            {/* <ul className="ingredients-list">
                {ingredlists}
            </ul> */}


            {ingredients.length >= 1 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
           
        </div>
    )
}

export default Main