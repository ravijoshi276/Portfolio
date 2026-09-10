import { useState } from "react";

export default function Header ({activeSection}){
    const [isOpen,setIsOpen] = useState(false);
    const links = [
            {label:'Home',link:''},
            {label:'Projects',link:''},
            {label:'Skills',link:''},
            {label:'About',link:''}
    ]

    const toggleIsOpen = ()=>{
        setIsOpen(prev=>!prev);
    }
    
    return <header className="sticky z-100 top-0 w-full bg-[var(--bg-page)] p-1 min-h-3vh border-2 border-[var(--border)] ">
        <nav className="h-full ">
            
            <div id="nav-icon1"  className={`${isOpen? "open":""} block my-auto ml-3 h-12 w-16  mt-3  md:hidden `} onClick={toggleIsOpen}>
  <span></span>
  <span></span>
  <span></span>
</div>
            <div id='links' className={`${isOpen?"flex":'hidden'} realative duration-500 ease-in-out flex-col items-center gap-2 pb-2 md:flex md:flex-row md:w-full md:flex-row md:justify-center md:gap-10  `}>
                {links.map(item=><a key={item.label} href={'#'+item.label.toLowerCase()} onClick={toggleIsOpen} className={`block relative  hover:text-[var(--accent-hover)]  ${activeSection === item.label.toLowerCase()? 'text-grey-500 translate-x-3 md:translate-y-1 font-bold'
                : 'text-[var(--accent)] link-hover'}`}>{item.label}</a>)}
            </div>
           
        </nav>
    </header>
}