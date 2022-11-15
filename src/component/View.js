import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({users,deleteUser}) => {
    
    return users.map(book=>(
        
        <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.fname}</td>
            <td>{book.lname}</td>
            <td className='delete-btn' onClick={()=>deleteUser(book.id)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
