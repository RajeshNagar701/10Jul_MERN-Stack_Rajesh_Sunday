import { BrowserRouter, Route, Routes } from "react-router-dom";
import React_Bootstrap from "./Bootstrap/React_Bootstrap";
import Simple_bootstrap from "./Bootstrap/Simple_bootstrap";
import CSS from "./CSS/CSS";
import Class_compo from "./Component/Class_compo";
import Func_compo from "./Component/Func_compo";
import JSX from "./JSX/JSX";
import MUI from "./MUI/MUI";
import Slick_slider from "./MUI/Slick_slider";
import Module_css from "./Module_css/Module_css";
import Class_props from "./Props/Class_props/Class_props";
import Func_props from "./Props/Func_props/Func_props";
import Home from "./Routing/Pages/Home";
import Sass from "./Sass/Sass";
import Styled_component from "./styled_component/Styled_component";
import About from "./Routing/Pages/About";
import Contact from "./Routing/Pages/Contact";
import Func_state from "./State/Func_state/Func_state";
import Class_state from "./State/Class_state/Class_state";
import Main_lazy from "./Lazy_suspense/Main_lazy";
import Life_class from "./LifeCycle/Class/Life_class";
import Func_life from "./LifeCycle/Function/Func_life";
import Props_drilling from "./Props_drilling/Props_drilling";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer";

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
                //<Styled_component/>
                
                // Props
                //<Func_props/>    
                //<Class_props/> 
                
                // Routing
                /*
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/contact" element={<Contact/>}></Route>
                    </Routes>
                </BrowserRouter>
                */

                //state
                //<Func_state/>
                //<Class_state/>

                //<Main_lazy/>

                //Lifecycle

                //<Life_class/>
                //<Func_life/>

                // state globaly  1) props drilling 2) createContext/useContext 
                
                //<Props_drilling/>
                //<UseContext/>

                // useReducer  
                //<UseReducer/>

            }
            
        </>
    )
}

export default App;