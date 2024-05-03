import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { loadEssentialModels } from "../../utils/faceAPI";
import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import { useDashboardContext } from "./DashboardContext";
import {Settings, SettingsModal, useSettingsContext} from "../Settings";
import RecordedExpressionsModal from "../Recording";
import Spinner from "../Spinner/Spinner";
import "./Dashboard.css";

const Dashboard = () => {

  const {loadedModels, setLoadedModels, recordedExpressionsVisible} = useDashboardContext();
  const {settingsVisible} = useSettingsContext();

  // Loads the essential models required for face detection, face landmarks detection
  // when the component is just mounted
  useEffect(() => {
    loadEssentialModels()
    .then(() => setLoadedModels(true));
  });

  return(
    loadedModels
    ? <div className="dashboard min-h-screen min-w-full " id="dash-main">
        <div className="dashboard-left videocomponent flex-1 flex flex-col items-center justify-center ">
          <div className="flex flex-col w-fit relative">
            <VideoComponent />
            <Settings />
          </div>
        </div>
        <div className="dashboard-right">
          <div className="realtime-emotion flex flex-col items-center justify-center w-[200px] h-[200px] sm:w-[200px] sm:-h[200px] md:w-[200px] md:h-[250px] lg:w-[600px] lg:h-[600px]" >
            <RealTimeEmotion />
          </div>
        </div>
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          mode="wait"
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          {settingsVisible && <SettingsModal />}
        </AnimatePresence>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {window.innerWidth >= 870 && recordedExpressionsVisible && <RecordedExpressionsModal />}
        </AnimatePresence>
      </div>
    : <span className="min-h-screen flex flex-col items-center justify-center bg-bg-1">
        <Spinner text={"Loading ML Models"} />
      </span>
  );
};

export default Dashboard;
