import React from 'react'
import  './Toggle.css'
import cx from 'classnames'

const WidgetControls=({rounded=false})=>{
    const SlideCx=cx("slider",{rounded:rounded})

    return(
        <div className='Widgets'>
            <div className='WidBasic'>
            <label for='org'>Select Organization</label>
<select id='org'>
    <option disabled hidden selected>Select Here</option></select><br></br><br></br>
<label for='style'>Widget Style</label>
        <select id='style'>
            <option disabled hidden selected>Select Here</option>
        </select>
        </div>
        <br></br>
        
<div className='WidgetControls'>
        <h1>Widget Control</h1>
        <label>Allow Widget Resize?</label>
        <label className="switch">
               <input type='checkbox'/>
               <span className={SlideCx}/>

           </label>
           <br></br>
           
        
        <br></br>
        <label>Show Maximum Button?</label>
        <label className="switch">
               <input type='checkbox'/>
               <span className={SlideCx}/>

           </label>
           <br></br>
           <br></br>
           <label>Show Minimize Button?</label>
           <label className="switch">
               <input type='checkbox'/>
               <span className={SlideCx}/>

           </label>
           <br></br>
           <br></br>
           <label>Show Popout Button?</label>
           <label className="switch">
               <input type='checkbox'/>
               <span className={SlideCx}/>
               </label>
               <br></br>
               <br></br>

               <label for='anim'>Widget Animation?</label>
               <select>
                   <option disabled hidden selected>Select Here</option>
               </select>
               </div>
               <br></br>
               <br></br>
               <div className='WidgetIcon'>
                   <h1>Widget Icon Settings</h1>
                   <label for='loc'>Widget Icon Location</label>
                   <select id='loc'>
                       <option disabled hidden selected>Select Here</option>

                   </select>
                   <br></br>
                   <br></br>
                   <label>Show Maximum Buton?   </label>
                   <label className="switch">
               <input type='checkbox'/>
               <span className={SlideCx}/>
               </label>
               <br></br>
               <br></br>
               <label for='graph'>Select Graphic File</label>
               <input type="url" id="graph" placeholder="Link"/>
               <form method ="post">
               <input type='file' id='graph' />
               </form>
               <br></br>
               <br></br>
               </div>
               
               <div className="Submit" >
                   <input type="button" value="CANCEL CHANGES"/> 
                   <input type="button" value="SAVE AND APPLY"/>

               </div>   
              
                  
               
               

        </div>
    )
}
export default WidgetControls