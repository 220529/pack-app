import { useState, useEffect } from "react";
import "./index.less";

export default () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((e) => {
      return e + 1;
    });
  };

  useEffect(() => {
    console.log("effect...start2", count);
    return () => {
      console.log("effect...end", count);
    };
  }, [count]);

  return (
    <div>
      <button onClick={handleIncrement}>{count}</button>
      <p>
        <span>aaaa</span>
      </p>
      <a
        href="https://activity.lagou.com/app/business/service-agreement.html"
        target="_blank"
        className="transform"
      >
        《拉勾网在线增值服务协议》
      </a>
    </div>
  );
};
