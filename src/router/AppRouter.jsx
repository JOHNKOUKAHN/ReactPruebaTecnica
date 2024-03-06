import { Route, Routes } from "react-router-dom"
import App from "../App"
import { TestPage } from "../pages/TestPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/test" element={<TestPage/>}/>
        </Routes>
    </>
  )
}
