import { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(`렌더 : ${renderCount.current}`);
  });
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>btn</button>
    </div>
  );
}
export default App;
