import React from 'react'
import "./footer1.css"

function Footer1() {
  return (
    <>
      <div id='footer1'>
          <div className="footer1_container">
              <div id='footer1_logo'>
                  <p id='dnk'>Ola's</p>
                  <h3> The best look anytime, anywhere.</h3>
              </div>
          
              <div className='BOX'>
                  <ul>
                    <h3>For Her</h3>
                    <li><a href=""> Women's Tea</a> </li>
              <li><a href=""> Coffee</a> </li>
              <li><a href=""> Women Health</a> </li>
              </ul>
              </div>
              
              <div className='BOX'>                  
                  <ul>
                    <h3>For Him</h3>
                    <li><a href=""> Men's Tea</a> </li>
                    <li><a href=""> Coffee for Men</a> </li>
                    <li><a href=""> Men Health</a> </li>
                  </ul>
              </div>
        
              <div className='BOX contact'>                  
                  <ul>
                    <h3>Subscribe</h3>
                    <input type="text" placeholder='Your e-mail address...'/>
                    <button>SUBSCRIBE</button>
                  </ul>
              </div>
           
          </div>
      </div>

      
    </>
  )
}

export default Footer1