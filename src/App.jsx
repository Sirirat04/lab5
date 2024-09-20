import { useState } from "react";
import './App.css';

export default function App() {
  const [level, setLevel] = useState(1);
  const [size, setSize] = useState(100);

  const feedPig = (foodValue) => {
    setLevel((prevLevel) => prevLevel + foodValue);
    setSize((prevSize) => prevSize + foodValue * 2);  //ให้อาหาร
  };

  const resetGame = () => {
    setLevel(1);
    setSize(100); //seset เกม
  };

  return (
    <div>
      <h1>Level {level}</h1>
      <img
        src={level > 100 ? "https://fishingthai.com/wp-content/uploads/2020/12/Hippopotamus-5.jpg" : "https://th.bing.com/th/id/R.ed4c5e6c3cb8b2ebd77b4cb9a2d62057?rik=etbFaTSMh5n%2fvA&pid=ImgRaw&r=0"}
        alt="หมูเด้ง โย๊ะๆ เฮ้วๆ หู้วว "
        style={{ width: size, height: size }}
      />
      <div>
          <img src="https://image.makewebeasy.net/makeweb/0/Ommd4Syoj/DefaultData/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9_%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%8B%E0%B8%B8%E0%B8%9B%E0%B8%8A%E0%B8%B2%E0%B8%9A%E0%B8%B9_%E0%B9%92%E0%B9%91%E0%B9%90%E0%B9%95%E0%B9%91%E0%B9%91_35.jpg" alt="ชาบู" width={50} height={50} onClick={() => feedPig(5)}/>
          <img src="https://th.bing.com/th/id/OIP.4yQK3jRB--0gHKg4Yo-WzAAAAA?rs=1&pid=ImgDetMain" alt="kfc" width={50} height={50} onClick={() => feedPig(10)}/>
          <img src="https://images.deliveryhero.io/image/fd-th/LH/elw1-hero.jpg" alt="หม่าล่า" width={50} height={50} onClick={() => feedPig(20)}/>
      </div>
      <button onClick={resetGame}>reset</button>
    </div>
  );
}