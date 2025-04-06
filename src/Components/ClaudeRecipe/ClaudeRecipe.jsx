import ReactMarkdown from 'react-markdown';
import "./ClaudeRecipe.css"


export default function ClaudeRecipe(props){
    return(
        <div className="recipe-container" aria-live="polite">
        <div className="recipe-content">
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </div>
      </div>
    )


}


