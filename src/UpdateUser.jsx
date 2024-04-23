import { useLoaderData } from "react-router-dom"

function UpdateUser() {
  const user = useLoaderData();
  console.log(user)
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h3 className="text-3xl font-semibold">{user.name}</h3>
        <p className="text-2xl font-medium">{user.email}</p>
        <p>{user._id}</p>
      </div>
    </div>
  )
}

export default UpdateUser