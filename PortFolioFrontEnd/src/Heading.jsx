import LevelContext from "./Context/LevelContext";
import { useContext } from "react";

export default function Heading ({className,children}){
    const level = useContext(LevelContext) ;
    
    const Tag = `h${level <6 ?level:"6"}`

    return <Tag className={className}>{children}</Tag>
    
}