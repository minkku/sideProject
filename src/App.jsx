import { useState } from "react";
import TextInput from "./TextInput";
import Counter from "./Counter";

function App() {
  /** 아래 변수 의미
   * count -> 화면에서 보여줄 값
   * setCount -> 값을 바꾸는 함수
   * 0 -> 초기값
   * 값을 바꾸면 화면이 자동으로 다시 그려짐
   */
  //const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  return (
    <div>
      <TextInput text={text} setText={setText} />
      <Counter text={text} />

      <button onClick={() => setText("")}>RESET</button>
      <button onClick={() => setText("Practicing React")}>예시 입력</button>
    </div>
  );
}

export default App;
