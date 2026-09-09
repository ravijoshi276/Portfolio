import { useContext } from "react";
import LevelContext from "./Context/LevelContext";

export default function Section ({children,className,id}){
    const level = useContext(LevelContext)
    return(
    <section id={id} className = {className}>
        <LevelContext value={level+1}>
            {children}
        </LevelContext>
    </section>)
}