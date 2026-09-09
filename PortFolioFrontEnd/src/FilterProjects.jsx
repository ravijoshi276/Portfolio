import { CategoryList } from "./ProjectList";

export default function FilteProject({category,changeCategory,className}){

    return <div className={className + " divide-y divide-[var(--border)] bg-[var(--bg-surface)]"}>
       {CategoryList.map((name,index)=> <button key = {index} name={name} type="button" className={`w-full  text-center p-0 m-0 ${name==category? 'bg-[var(--accent)]': "hover:text-[var(--accent)]"}`} onClick={()=>changeCategory(name)}>{name}</button>) }

    </div>
}