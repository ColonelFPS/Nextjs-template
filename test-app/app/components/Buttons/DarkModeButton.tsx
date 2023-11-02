import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

function DarkModeButton() {
    const { setTheme, resolvedTheme } = useTheme();
  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="btn btn-sm mr-2">{resolvedTheme === 'dark' ? <Moon className='w-4 h-4'/> : <Sun className='w-4 h-4'/>}</button>
  )
}

export default DarkModeButton