const UserSettings: React.FC = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">User Settings</h1>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <form>
            <label className="block mb-4">
              Email:
              <input
                type="email"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </label>
            <label className="block mb-4">
              Password:
              <input
                type="password"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default UserSettings;
  