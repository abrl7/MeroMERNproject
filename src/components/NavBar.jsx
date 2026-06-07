import React from 'react'

const NavBar = () => {

    const gotoGit=() => {
      
    }
    
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'>&lt;</span>
                Pass
               <span className='text-green-500'>OP/&gt;</span>
                </div>
            {/* <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="/about">About</a>
                    <a className='hover:font-bold' href="/contact">Contact</a>
                </li>
                
           
            </ul> */}
             <button className='text-white bg-green-700 rounded-full flex my-5  items-center justify-between ring-white ring-1  ' onClick={()=>{gotoGit}}>
                <img className='invert p-1 rounded-full' src="github.png" alt="" width={45} />
                 <span className='font-bold px-2'>
                    GitHub
                    </span> 

            </button>

           
            </div>
        </nav>
    )
}

export default NavBar