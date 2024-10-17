import ReactDOM from "react-dom/client"; // 注意引入路径更改
import App from "./App";

// 创建根节点
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 渲染应用
root.render(<App />);
