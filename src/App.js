import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { ContactUsePage } from "./pages/ContactUsePage";
import { AboutUsePage } from "./pages/AboutUsePage";
import { ExercisesPage } from "./pages/ExercisesPage";
import { ExercisePage } from "./pages/ExercisePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { EditExercisePage } from "./pages/EditExercisePage";
import { CreateExercisePage } from "./pages/CreateExercisePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EmployeeDetail } from "./components/EmployeeDetail";
import { ProfilePage } from "./pages/ProfilePage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { EmployeePage } from "./pages/EmployeePage";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsePage />} />
          <Route path="/about" element={<AboutUsePage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/exercise/:id" element={<ExercisePage />} />
          <Route path="/exercises/:id/edit" element={<EditExercisePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
          <Route path="/create/exercises" element={<CreateExercisePage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/employee/:id" element={<EmployeePage />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
