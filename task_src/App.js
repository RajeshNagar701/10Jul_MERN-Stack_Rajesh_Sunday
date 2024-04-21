import React_Bootstrap from "./Bootstrap/React_Bootstrap";
import Simple_bootstrap from "./Bootstrap/Simple_bootstrap";
import CSS from "./CSS/CSS";
import Class_compo from "./Component/Class_compo";
import Func_compo from "./Component/Func_compo";
import JSX from "./JSX/JSX";
import MUI from "./MUI/MUI";
import Slick_slider from "./MUI/Slick_slider";
import Module_css from "./Module_css/Module_css";
import Sass from "./Sass/Sass";
import Styled_component from "./styled_component/Styled_component";

function App(){
    return(
        <>
            {
                // Component
                //<Func_compo/>
                //<Class_compo/>


                // jsx
                //<JSX/>

                // css /  module css / sass
                //<CSS/>
                //<Module_css/>
                //<Sass/>

                //Bootstrap // mui 
                //<Simple_bootstrap/>
                //<React_Bootstrap/>
                //<MUI/>
                //<Slick_slider/>

                // custome create component
                <Styled_component/>

            }
            
        </>
    )
}

export default App;