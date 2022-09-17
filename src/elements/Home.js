import {style} from "./styled-components/HomeStyle.js";
import Categorie from "./Categorie.js";

export default function Home(){
    return(
        <>
        <style.CONTENT>
            <Categorie name="Adidas"></Categorie>
            <Categorie name="Nike"></Categorie>
            <style.HIGHLIGHTS></style.HIGHLIGHTS>
            <Categorie name="Asics"></Categorie>
            <Categorie name="Fila"></Categorie>
            <style.HIGHLIGHTS></style.HIGHLIGHTS>
            <Categorie name="Olympikus"></Categorie>
        </style.CONTENT>
        </>
    );
}