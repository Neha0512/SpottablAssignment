import React from 'react'
import { useSelector } from 'react-redux'
import Customers from './Customers'

const Customer = () => {
  const customers=useSelector(state=>state.customers)
  return (
    <div>
        <h4>Customer Success Manager</h4>
   <form className='w-100'>
   <div className="input-group w-100 p-2">
    <input type="text" placeholder="Add by Name or email" size="145" />
   <div className="input-group-btn">
   <button className="input-group-addon w-100 " type="submit">Add CSM</button>
   </div>
  </div>
   </form>
   <table class="table p-3">
  <tbody>
   {
     customers.map((customer)=>(

   <Customers  customer={customer}/>
     ))
   }

  </tbody>
</table>
    </div>
  );
};

export default Customer;