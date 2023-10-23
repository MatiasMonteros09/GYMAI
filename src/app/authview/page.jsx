const AuthView = () => {
    return (
      <div className="h-screen mx-5 flex flex-col justify-center items-center ">
        <h1 className="text-center text-white text-xl mb-10 font-extrabold">NICE TO SEE YOU!</h1>
        <form >
          <div className="rounded-lg bg-orange-600 p-5 mb-5 flex">
            <label className="mx-4 font-bold">Username</label>
            <input className="w-3/5 rounded-lg" type="text" />
          </div>
          <div className="rounded-lg bg-orange-600 p-5 mb-20 flex">
            <label className="mx-4 font-bold">Password</label>
            <input className="w-3/5 rounded-lg" type="password" />
          </div>
          <div className="rounded-lg bg-orange-600 p-8 mb-5 flex justify-center items-center">
            <button className="text-white text-3xl font-semibold">
              Login
            </button>
          </div>
          
  
        </form>
            <button className="bg-orange-600 rounded-lg mt-3 px-6 font-semibold">
              Back
            </button>
      </div>
    );
  };
  
  export default AuthView;
  
