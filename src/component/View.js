import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ users, deleteUser }) => {
  
    const [line, setLine] = useState(false);

    const completeHandle = (id) => {
      console.log("Complete",id);
      setLine(true);
    };

  return users.map((book) => (
    <tr
      key={book.id}
      style={{textDecoration:line ? "line-through":"none"}}
    >
      <td>{book.id}</td>
      <td>{book.fname}</td>
      <td>{book.lname}</td>
      <td className="delete-btn" onClick={() => deleteUser(book.id)}>
        <Icon icon={trash} />
      </td>
      <td className="complete-btn" onClick={() => completeHandle(book.id)}>
        Complete task
      </td>
    </tr>
  ));
};
