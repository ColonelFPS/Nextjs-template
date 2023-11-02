import { Hash, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer items-center px-8 py-2 w-screen bg-black/90 dark:bg-white dark:text-black text-neutral-content">
    <aside className="items-center grid-flow-col">
     <Hash className='w-20 h-20 -rotate-12'/>
      <p>Copyright © 2023 - All right reserved</p>
    </aside> 
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a><Twitter />
      </a> 
      <a><Instagram /></a>
      <a><Youtube /></a>
    </nav>
   </footer>
  )
}

export default Footer