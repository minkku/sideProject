import { useState } from "react";
import TextInput from "./TextInput";
import Counter from "./Counter";
import Summary from "./Summary";
import { summarizeText } from "./api/summarize";

function App() {
  /** 아래 변수 의미
   * count -> 화면에서 보여줄 값
   * setCount -> 값을 바꾸는 함수
   * 0 -> 초기값
   * 값을 바꾸면 화면이 자동으로 다시 그려짐
   */
  //const [count, setCount] = useState(0);

  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   *
   * @param {ex: 리액트 연습중입니다.} text
   * @returns
   *
   * TextInput.jsx 에서 text를 param으로 받아와서 아래 함수 호출 시 fakeSummarize("리랙트 연습중입니다.")
   * return new Promise((resolve) => {  // 함수 결과를 바로 주지 않고 나중에 준다
   * Promise = 미래에 값이 도착할 것이라는 약속
   * resolve = 나중에 결과를 전달하는 함수
   */
  function fakeSummarize(text) {
    return new Promise((resolve) => {
      setTimeout((reslove) => {
        resolve(text.slice(0, 10) + "...");
      }, 1000);
    });
  }

  const handleSummarize = async () => {
    setLoading(true);
    setSummary("");
    /**
     *
     * 1. fakeSummarize(text) 호출
     * 2. Promise 반환
     * 3. await가 결과 나올떼까지 대기
     * 4. resolve(...) 실행됨
     * 5. 결과 result 변수에 할당
     * 6. setSummary에 값 보여줌
     * 7. 로딩 종료
     */
    const result = await fakeSummarize(text);

    setSummary(result);
    setLoading(false);
  };

  return (
    <div>
      <TextInput text={text} setText={setText} />
      <Counter text={text} />

      <button onClick={handleSummarize}>요약하기</button>
      <Summary summary={summary} loading={loading} />
    </div>
  );
}

export default App;
