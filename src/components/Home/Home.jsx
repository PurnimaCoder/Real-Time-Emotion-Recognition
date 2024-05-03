import { Link } from "react-router-dom";
import { Button } from "../AnimatedComponents";
import "./Home.css";
import emotionRecognitionChart from "../../assets/emotionRecognitionChart.jpg";
import overallEmotionAnalysis from "../../assets/overallEmotionAnalysis-1.jpg";
import face from "./face.jpg"

const Home = () => {
  let date = new Date();
  let year = date.getFullYear();
  return(
    <>
      <section className="banner w-full flex flex-col items-center justify-between min-h-fit" id="home-page">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:justify-between lg:min-h-screen min-w-full" >

          <div className="home-face-emotion">
            <div className="home-main">
          <div className="banner-left  flex flex-col items-start justify-start" id="home-left">
            <p className="banner-title  text-3xl lg:text-4xl text-gray-900 p-2 lg:p-3 border-none rounded-lg " id="home-title">Face Emotion Recognition</p>
            <p className="banner-description font-poppins text-lg lg:text-xl text-gray-700 mt-4 ml-2">
              Recognizes the faces in a Video Stream.
            </p>
            <p className="banner-description font-poppins text-lg lg:text-xl text-gray-900 ml-2 align-justify" >
              Can also detect the facial emotions.Facial recognition is a way of identifying or confirming an individual's identity using their face. Facial recognition systems can be used to identify people in photos, videos, or in real-time. Facial recognition is a category of biometric security.
            </p>
            <div className="banner-run mt-8 flex flex-row">
            
              <Link to={"/dashboard"}>
                <Button
                  onClick={() => {}}
                  rotateAnimation={false}
                >
                  <div className="banner-run-github rounded-lg border-none px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all drop-shadow-[0_5px_4px_rgba(128,128,128,1)] hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(218,247,166,1)]">
                    <span className="text-gray-700 text-lg lg:text-xl" >Run</span>
                    <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="17" y1="7" x2="7" y2="17" />
                      <polyline points="8 7 17 7 17 16" />
                    </svg>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="banner-right" id="home-right">
            <img src={face} />
          </div>
          </div>
          </div>
          </div>
       <div style={{marginTop:"-4rem",color:"black",fontSize:"15px",paddingBottom:".5rem",fontWeight:"bold"}}>Designed & Developed by Ms. Purnima Panda</div>
       <div style={{color:"black",fontSize:"15px",fontWeight:"bold",paddingBottom:"1rem",fontStyle:"italic"}}>Copyright © {year} Purnima Panda</div>
      </section>


      {/* <section className="face-emotion w-full flex flex-col lg:flex-row items-center lg:pt-16 justify-start lg:justify-between lg:pr-10 bg-bg-2">
        <div className="face-emotion-left w-full h-auto flex flex-row items-center justify-center lg:ml-20 flex-1">
          <img className="w-11/12 lg:w-[640px] lg:h-[480px]" src={emotionRecognitionChart} alt=""></img>
        </div>
        <div className="face-emotion-right mt-4 w-11/12 lg:mt-20 flex-1 flex flex-col items-start justify-start">
          <p className="face-emotion-title font-dmMono text-2xl lg:text-3xl p-2 border-none rounded-lg text-gray-600 bg-bg-1">Real Time Emotion Recognition</p>
          <p className="face-emotion-description font-dmMono text-base lg:text-lg text-gray-600 ml-2 mt-2">
            Detects the faces from the Video Stream.
          </p>
          <p className="face-emotion-description font-dmMono text-base lg:text-lg text-gray-600 ml-2">
            Recognizes the facial landmarks.
          </p>
          <p className="face-emotion-description font-dmMono text-base lg:text-lg text-gray-600 ml-2">
            Hence predicts the facial expression from the landmarks.
          </p>
        </div>
      </section>

      
      <section className="emotion-analysis w-full flex flex-col lg:flex-row items-center pt-16 pb-16 justify-start lg:justify-between lg:pr-10 bg-bg-2">
        <div className="face-emotion-left w-full h-auto flex flex-row items-center justify-center flex-1 lg:ml-20">
          <img className="w-11/12 lg:w-[640px] lg:h-[480px]" src={overallEmotionAnalysis} alt=""></img>
        </div>
        <div className="emotion-analysis-right mt-4 w-11/12 lg:mt-20 flex-1 flex flex-col items-start justify-start">
          <p className="emotion-analysis-title font-dmMono text-2xl lg:text-3xl p-2 border-none rounded-lg text-gray-600 bg-bg-1">Overall Emotion Analysis</p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2 mt-2">
            While the webcam is on, the expressions detected will be recorded.
          </p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2">
            When the webcam is turned off (for example when the video call is completed), the recorded expressions will be plotted on a Area Chart.
          </p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2">
            This is an interactive Area Chart, it is also downloadable :)
          </p>
          <p className="emotion-analysis-description font-dmMono text-base lg:text-lg text-gray-700 ml-2">
            This analysis helps teacher, analyse the student's expressions, mood for one whole video call.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Home;