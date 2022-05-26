import React from 'react'
import './Addemployee.css'
const Addemployee = () => {
  return (
    <div className='emp_info'>
        <section>
        <form className='form'>
            <label>
              Full Name:  
            </label>
            <input type='text'
            placeholder='name' name='name' />
            <br/>
            <label>
              Date of birth:  
            </label>
            <input type='date'
            placeholder='date'  />
            <br/>
            <label>
             Address:  
            </label>
            <input type='text'
            placeholder='adress' name='name' />
            <br/>
            <label>
              City:  
            </label>
            <input type='text'
            placeholder='city' name='name' />
            <br/>
            <label>
              state:  
            </label>
            <input type='text'
            placeholder='State' name='name' />
            <br/>
            <label>
              Pincode:  
            </label>
            <input type='number'
            placeholder='pincode' name='name' />
             <br/>
            <label>
              Email:  
            </label>
            <input type='email'
            placeholder='email' name='email' />

           <br/>  
            <label>
              Password:  
            </label>
            <input type='password'
            placeholder='password' name='password' />
            <br/>  
            <label>
              joining date:  
            </label>
            <input type='date'
            placeholder='date' name='date' />
<br/>  
            <label>
              paid leave taken:  
            </label>
            <input type='number'
            placeholder='' name='leave taken' />
<br/>  
            <label>
              Encase Leave this Mounth:  
            </label>
            <input type='date'
            placeholder='date' name='date' />
<br/>  
            <label>
              Encase Leave until this Mounth:  
            </label>
            <input type='date'
            placeholder='date' name='date' />


            </form>
            </section>
        </div>
  )
}

export default Addemployee