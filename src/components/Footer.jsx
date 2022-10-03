import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#00df8c] text-xl text-black py-4 fixed inset-x-0 bottom-0 p-4 text-xs flex justify-between">
        <div>
            &copy; All Rights reserved 2022
        </div>
        <div className="space-x-1">
            <a className="fa" href='#main'>Home</a>
            <a className="fa"
              rel="noreferrer"
              href="https://github.com/SafeTorpedo/Impractical-Hackers"
              target={"_blank"}>
              Github Repo
            </a>
            
        </div>
    </footer>    
    </div>
  )
}

export default Footer