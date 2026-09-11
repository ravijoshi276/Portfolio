import Heading from './Heading'
import { ContactForm } from './ContactForm'
export default function About(){
    return<div className='flex flex-col gap-5 p-5 border-solid border-b-2 border-[var(--border)] lg:flex-row  lg:items-center'>
        <div className='flex flex-col gap-5 text-xl w-4/5 lg:w-1/2'>
        <Heading>About</Heading>
        <p className='text-preety pl-3 text-[var(--text-secondary)]'>
    I didn't start out writing code. I started out titrating solutions in a chemistry lab, then running operations for a logistics team, then spending three months untangling business data as an analyst — before realizing what I actually wanted was to build the systems everyone else was just working inside of.<br/> <br/>

    That background shows up in how I build. When I put together LittleLemon — a restaurant platform with three separate logins and three separate sets of permissions — I didn't leave the access rules sitting in the React code where they're easy to fake. I put them in the API, where they actually hold.<br/> <br/>

    I write React on the front end, Django REST Framework on the back, and PostgreSQL is where I'm strongest on the data side — I've also worked with MongoDB and Cassandra and I'm comfortable picking them up as a project calls for it, but Postgres is where I go deep.<br/> <br/>

    Right now I'm building, applying, and looking for a remote team that wants someone who treats the database as part of the product, not an afterthought.
</p>
</div>
<ContactForm />
    </div>
}