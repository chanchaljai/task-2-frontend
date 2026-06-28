import { Link } from "@tanstack/react-router";
import useApi from "../hooks/UseApi";
import type {User} from "../types/user";
const Users = () => {
  const { data, isLoading, isError, error } = useApi();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(isError) {
    return <div>Error: {error?.message}</div>
  }
  console.log(data);
  console.log(data?.limit);
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Users List</h2>
        <Link
          to="/admin/products/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New User
        </Link>
      </div>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-200 ">Name</th>
            <th className="px-4 py-2 border border-gray-200">Email</th>
            <th className="px-4 py-2 border border-gray-200">Phone</th>
            <th className="px-4 py-2 border border-gray-200">Age</th>
            <th className="px-4 py-2 border border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>{/* Users list ke liye data show karo */}
          {data?.users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border border-gray-200">{user.firstName} {user.lastName}</td>
              <td className="px-4 py-2 border border-gray-200">{user.email}</td>
              <td className="px-4 py-2 border border-gray-200">{user.phone}</td>
              <td className="px-4 py-2 border border-gray-200">{user.age}</td>
              <td className="px-4 py-2 border border-gray-200">Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
