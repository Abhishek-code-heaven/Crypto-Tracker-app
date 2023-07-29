import { useState } from "react";
import developerImage from "./developer-image.png";
import Typewriter from "react-typewriter"

// const About = () => {
//   return (
//     <div>
//       <h1>About Me</h1>
//       <p>I am a developer who loves to build things. I am passionate about learning new things and sharing my knowledge with others.</p>
//       <img src={developerImage} alt="Developer Image" />
//     </div>
//   );
// };
const About = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    const handleChange = () => {
      setText(text.slice(0, index) + text[index] + text.slice(index + 1));
      setIndex(index + 1);
    };
    return (
    <div>
      <input
        type="text"
        disabled
        value={"Abhishek vaid"}
        onChange={handleChange}
      />
      <div
        style={{
          animation: "typewriter 5s linear infinite",
        }}
      >
        {text}
      </div>
    </div>
  );
};
// const About = () => {
//     return (
//         <div>
//         <h2>About Me</h2>
//         <Typewriter
//           options={{
//             strings: ["Experienced React developer", "Passionate about web development", "Enthusiastic learner"],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//       </div>
//   );
// };
   
export default About;