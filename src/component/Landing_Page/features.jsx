import React, { useState } from "react";
import { FaChair } from "react-icons/fa";
import "../../styles/feature.css";
import feature1 from "../../assets/3d-fluency-blockchain.png";
import feature2 from "../../assets/pixeltrue-data-analysis.png";
import feature3 from "../../assets/pixeltrue-icons-compound-interests-3.png";
import feature4 from "../../assets/open-doodles-chilling-with-smartphone.png";
import feature5 from "../../assets/pixeltrue-icons-security-3.png";
import feature6 from "../../assets/3d-fluency-people.png";

const features = [
  {
    title: "Blockchain Integration for Enhanced Security",
    text: "Integrates cutting-edge AI models with blockchain tokens for enhanced data security and intelligence.",
    tagName: `${feature1}`,
  },
  {
    title: "Virtual AI Assistant",
    text: "We are providing some unique and exceptional features using machine learning",
    tagName: `${feature2}`,
  },
  {
    title: "Masa Twitter Real-Time Analytics",
    text: "Provides instant insights, allowing users to make informed decisions with on-demand data analysis.",
    tagName: `${feature3}`,
  },
  {
    title: "Real Time Collaboration",
    text: "Users can now connect with each other via meetings, texts and content",
    tagName: `${feature4}`,
  },
  {
    title: "Adaptive Security Protocols",
    text: "Enforces adaptable security protocols powered by AI, protecting user data from emerging threats.",
    tagName: `${feature5}`,
  },
  {
    title: "Community Driven Ecosystem",
    text: "Encourages collaboration and growth within a community oriented network, empowering users and developers.",
    tagName: `${feature6}`,
  },
];

export function Features() {
  const [torchPosition, setTorchPosition] = useState({ x: 0, y: 0 });
  const [isTorchVisible, setIsTorchVisible] = useState(false);

  const handleMouseMove = (e) => {
    // Calculate the torch position relative to the card
    const { offsetX, offsetY } = e.nativeEvent;
    setTorchPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseEnter = () => {
    setIsTorchVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTorchVisible(false);
  };

  return (
    <div className="p-5 border-b-2 mt-10 mb-20" id="feature">
      <h4 className="d-flex justify-content-center mb-5 text-6xl feature_heading relative">
        Features
        <span className="w-25 bg-blue-400 opacity-25 absolute bottom-0 h-50"></span>
      </h4>
      <div className="grid lg:grid-cols-3 grid-flow-row gap-10 md:grid-cols-2 grid-cols-1 sm:grid-cols-1">
        {features.map((item) => {
          const [torchPosition, setTorchPosition] = useState({ x: 0, y: 0 });
          const [isTorchVisible, setIsTorchVisible] = useState(false);

          const handleMouseMove = (e) => {
            const { offsetX, offsetY } = e.nativeEvent;
            setTorchPosition({ x: offsetX, y: offsetY });
          };

          const handleMouseEnter = () => setIsTorchVisible(true);
          const handleMouseLeave = () => setIsTorchVisible(false);

          return (
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="card cursor-pointer relative p-5 gap-3 bg-zinc-400 d-flex flex-column items-center rounded-lg shadow-lg overflow-hidden"
              style={{
                background: isTorchVisible
                  ? `radial-gradient(circle at ${torchPosition.x}px ${torchPosition.y}px, rgba(255, 255, 255, 0.3) 30px, rgba(0, 0, 0, 0.9) 150px)`
                  : "rgba(0, 0, 0, 0.9)",
                transition: "background 0.1s ease",
              }}
            >
              <img height={200} width={200} src={item.tagName}></img>
              <h3
                style={{ color: "rgb(148,163,184)" }}
                className="card-title text-center font-bold  "
              >
                {item.title}
              </h3>
              <div className="card-text text-center text-slate-500 text-medium">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
