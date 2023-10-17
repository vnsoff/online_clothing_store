import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm'; // Import RegistrationForm

function RegistrationPage() {
  return (
    <div>
      <Header />
      <RegistrationForm /> {/* Use RegistrationForm component here */}
      <Footer />
    </div>
  );
}

export default RegistrationPage;