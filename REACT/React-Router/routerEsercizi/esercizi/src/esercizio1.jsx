import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Welcome({ name }) {
  return <h1>hello, {name}!</h1>;
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Jimmy" />} />
      </Routes>
    </BrowserRouter>
  );
}
