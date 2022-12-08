import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="입력 하던지 말던지 " />
      <button onClick={login}>로그인</button>
    </div>
  );
}
export default App;

// ref={inputRef} 를 사용해서 Dom 요소에 접근을 한뒤 input에 커런트에 포커싱 해주었다
