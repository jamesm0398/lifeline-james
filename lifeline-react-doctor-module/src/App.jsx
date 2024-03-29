import "./App.css";
import AppButton from "./components/AppButton";
import InfoCard from "./components/InfoCard";
import { UserAuth } from "./contexts/AuthContext";
import {
  FiMessageCircle,
  FiClock,
  FiCheckCircle,
  FiHeart,
} from "react-icons/fi";

function App() {
  const { user } = UserAuth();
  return (
    <>
      {/* hero section  */}
      <div className="flex flex-row justify-evenly gap-5 px-5 mb-5">
        <div className="w-[40%] flex items-start gap-3 flex-col justify-center">
          <p className="uppercase w-full text-start text-primary-green font-semibold">
            Presents
          </p>
          <h1 className=" text-start w-full font-bold text-5xl">
            A Dedicated doctor <br />
            you can trust
          </h1>
          <p>
            Using only your health card we connect you to your preferred
            doctor with whom you can manage appointments, as well as any prescriptions
          </p>
          <AppButton
            link={!user ? "/login" : "/appointments"}
            textContent={"Book an appointment"}
            icon={<FiMessageCircle />}
          />
        </div>
        <div>
          <img src="/src/assets/heroimg.png" alt="hero image" />
        </div>
      </div>
      
      {/* info card section  */}
      <section className="flex gap-5 justify-center py-10">
        <InfoCard
          icon={<FiClock className="w-8 h-8" />}
          title={"Easy Scheduling"}
          textContent={"Choose a date & time that works for you, based on availability"}
        />
        <InfoCard
          icon={<FiCheckCircle className="w-8 h-8" />}
          title={"Manage Prescriptions"}
          textContent={"View and request changes to or refill your prescriptions"}
        />
        <InfoCard
          icon={<FiHeart className="w-8 h-8" />}
          title={"Familiar Doctors"}
          textContent={"Choose a doctor you want to see"}
        />
      </section>

      {/* doctors trust section  */}
      <section className="h-screen flex justify-evenly gap-5 px-5 items-center">
        <div>
          <img src="/src/assets/doctors-trust.png" alt="trustable doctors" />
        </div>
        <div className="w-[40%] flex items-start gap-3 flex-col justify-center">
          <p className="uppercase w-full text-start text-primary-green font-semibold">
            About us
          </p>
          <h1 className="text-start w-full font-bold text-5xl">
            Dedicated doctors with the core mission to help
          </h1>
          <p>
           Are you tired of being on hold or never being able to get
           through to your doctor's office? We can fix that, you can schedule
           your appointment at any time 24 hours a day 7 days a week all online
          </p>
          <AppButton
            link={!user ? "/login" : "/appointments"}
            textContent={"Book an appointment"}
            icon={<FiMessageCircle />}
          />
        </div>
      </section>

      {/* doctors expertise section  */}
      <section className="h-screen flex flex-row-reverse justify-evenly gap-5 px-5 items-center">
        <div>
          <img src="/src/assets/visual.png" alt="trustable doctors" />
        </div>
        <div className="w-[40%] flex items-start gap-3 flex-col justify-center">
          <p className="uppercase w-full text-start text-primary-green font-semibold">
            Services
          </p>
          <h1 className="text-start w-full font-bold text-5xl">
            Experienced in multiple medical practices
          </h1>
          <p>
            We have many doctors with vast experience in different
            areas of medicine, you can choose which one is right for you
          </p>
          <AppButton
            link={!user ? "/login" : "/appointments"}
            textContent={"Book an appointment"}
            icon={<FiMessageCircle />}
          />
        </div>
      </section>
    </>
  );
}

export default App;
