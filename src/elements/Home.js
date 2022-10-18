import {style} from "./styled-components/HomeStyle.js";
import Categorie from "./Categorie.js";
import Highlights from "./Highlights.js";
import Topbar from "./Topbar.js";

export default function Home(){
    return(
        <>
        <Topbar/>
        <style.CONTENT>
            <Categorie name="Adidas"></Categorie>
            <Categorie name="Nike"></Categorie>
            <Highlights brand1="Nike" brand2="Adidas" brand3="Fila"></Highlights>
            <Categorie name="Asics"></Categorie>
            <Categorie name="Fila"></Categorie>
            <Highlights brand1="Olympikus" brand2="Asics" brand3="Adidas"></Highlights>
            <Categorie name="Olympikus"></Categorie>
        </style.CONTENT>
        </>
    );
}
//comentario teste