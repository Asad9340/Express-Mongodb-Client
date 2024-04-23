import { useLoaderData } from 'react-router-dom';

function UpdateUser() {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold">Update User</h2>
        <p>ID : {user._id}</p>
      </div>
      <div className=" flex justify-center items-center mt-6">
        <form className="bg-white w-96">
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              defaultValue={user.name}
              id=""
              placeholder="Full name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              defaultValue={user.email}
              id=""
              placeholder="Email Address"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
