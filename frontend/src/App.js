import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import UserPage from './pages/User';
import AnimalsPage from './pages/Animals';
import ApplicationsPage from './pages/Applications';
import AnimalViewPage from './pages/AniamalView';
import ApplicationView from './pages/ApplicationView';
import ApplicationForm from './pages/ApplicationForm';
import Login from './pages/Login';
import ReviewApplication from './pages/ReviewApplication';
import AddAnimalForm from './pages/AddAnimalForm';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // Load currentUser from local storage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const updateCurrentUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/login" element={<Login setCurrentUser={updateCurrentUser} />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage role={currentUser} />} />
        <Route path="/animals" element={<AnimalsPage role={currentUser} />} />
        <Route path="/applications" element={<ApplicationsPage role={currentUser} />} />
        <Route path="/animalview" element={<AnimalViewPage />} />
        <Route path="/applicationview" element={<ApplicationView role={currentUser} />} />
        <Route path="/review-application" element={<ReviewApplication />} />
        <Route path="/add-animal-form" element={<AddAnimalForm />} />
      </Routes>
    </>
  );
}

export default App;
