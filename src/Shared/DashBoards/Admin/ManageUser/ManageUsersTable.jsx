/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPen, FaShieldAlt } from "react-icons/fa";

const ManageUsersTable = ({
  items,
  i,
  handleMakeInstructor,
  handleMakeAdmin,
}) => {
  const [adminRole, setAdminRole] = useState(false);
  const [instructorRole, setInstructorRole] = useState(false);
  const handleChangeRoleAdmin = () => {
    setAdminRole(!adminRole);
    setInstructorRole(!instructorRole);
    handleMakeAdmin(items);
  };
  const handleChangeRoleInstructor = () => {
    setAdminRole(!adminRole);
    setInstructorRole(!instructorRole);
    handleMakeInstructor(items);
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img src={items?.image} alt="" className="w-12" />
      </td>
      <td>{items?.name}</td>
      <td>{items?.email}</td>
      <td>
        <button
          onClick={() => handleChangeRoleAdmin(items)}
          className="flex items-center"
          disabled={items.role === "admin"}
        >
          <FaShieldAlt /> Make Admin
        </button>
      </td>
      <td>
        <button
          onClick={() => handleChangeRoleInstructor(items)}
          className="flex items-center"
          disabled={items.role === "instructor"}
        >
          <FaPen /> Make Instructor
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersTable;
