import React from 'react'
import Avatar from 'react-avatar'
const Customers = ({customer}) => {
  return (
    <>
          <tr>
      <td><Avatar name={customer.name} size="45" round={true} className="bg-blue text-black mr-4"/></td>
      <td>{customer.name}<br />{customer.email}</td>
      <td>
          <a href="#">
              <span className="material-icons">delete</span>
          </a>
      </td>
    </tr>
    </>
  )
}

export default Customers