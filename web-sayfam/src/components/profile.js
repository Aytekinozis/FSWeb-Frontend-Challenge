import { useContext } from "react";
import photo2 from "../images/photo2.png";
import { DataContext } from "../context/DataContext";

const Profile = () => {
  const mydata = useContext(DataContext);
  return (
    <div className="bg-my-purple dark:bg-my-darkpurple flex justify-center py-10">
      <div className="w-9/12 flex flex-col justify-between mx-10 my-10">
        <h3 className="text-my-green font-bold text-5xl text-left">
          {mydata.data.profile.profile}
        </h3>
        <div className="flex text-white justify-between flex-wrap text-left">
          <div className="flex flex-col justify-evenly">
            <h4>{mydata.data.profile.basicinfo}</h4>
            <div className="flex flex-col justify-between gap-2">
              <div className="flex gap-3 w-38">
                <p className="pb-2 text-my-green">
                  {mydata.data.profile.birthdate}
                </p>
                <p className="pb-2">{mydata.data.profile.birthdate2}</p>
              </div>
              <div className="flex gap-3 w-38">
                <p className="pb-2 text-my-green">{mydata.data.profile.city}</p>
                <p className="pb-2">{mydata.data.profile.city2}</p>
              </div>
              <div className="flex gap-3 w-38">
                <p className="pb-2 text-my-green">
                  {mydata.data.profile.education}
                </p>
                <p className="pb-2">{mydata.data.profile.education2}</p>
              </div>
              <div className="flex gap-3 w-38 items-start">
                <p className="pb-2 text-my-green">{mydata.data.profile.role}</p>

                <p className="pb-2">{mydata.data.profile.role2}</p>
              </div>
            </div>
          </div>

          <img
            alt="fotoex"
            className="size-72 rounded-lg object-cover shadow-lg"
            src={photo2}
          />
          <div className="max-w-72 items-start flex flex-col justify-between">
            <h4>{mydata.data.profile.about}</h4>
            <p>{mydata.data.profile.aboutfirst}</p>
            <p>{mydata.data.profile.aboutsecond}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
