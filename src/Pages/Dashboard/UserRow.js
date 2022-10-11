import React from "react";

const UserRow = () => {
    return (
        <tr>
            <th>1</th>
            <td></td>
            <td>{<button class="btn btn-xs">Make Admin</button>}</td>
            <td>
                <button class="btn btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default UserRow;
