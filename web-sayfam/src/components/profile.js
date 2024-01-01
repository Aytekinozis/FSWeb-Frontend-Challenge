import photo2 from "../images/photo2.png";

const Profile = () => {
  return (
    <div className="bg-my-purple flex justify-center py-10">
      <div className="w-9/12 flex flex-col justify-between mx-10 my-10">
        <h3 className="text-my-green font-bold text-5xl text-left">Profile</h3>
        <div className="flex text-white justify-between text-left">
          <div className="flex flex-col justify-evenly">
            <h4>Basic Information</h4>
            <div className="flex justify-between">
              <div className="flex flex-col justify-between items-start text-my-green">
                <p className="pb-2">Date of Birth</p>
                <p className="pb-2">City of Residence</p>
                <p className="pb-2">Educational Status</p>
                <p className="pb-2">Preferred Role</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="pb-2">24.03.1996</p>
                <p className="pb-2">Ankara</p>
                <p className="pb-2">Hacettepe Ünv. Biyoloji Lisans, 2016</p>
                <p className="pb-2">Frontend, UI</p>
              </div>
            </div>
          </div>

          <img
            alt="fotoex"
            className="size-72 rounded-lg object-cover shadow-lg"
            src={photo2}
          />
          <div className="max-w-72 items-start flex flex-col justify-between">
            <h4>About Me</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
