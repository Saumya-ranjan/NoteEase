import React from 'react';
// import LoginPage from './login/page';

interface TemplateProps {
  children: React.ReactNode;
}
// Inside the page.tsx, it might use a layout component like Template to wrap the content. 
// The Template acts as a layout wrapper for the content within the login page.
//The Template component doesn’t need to be directly inside the login folder; 
//it could be placed at a higher level, like the top-level components folder or layouts folder, 
//to offer a shared layout structure for multiple pages or sections of the application. 
//This separation allows for reusability and consistency across different sections 
//without tying the layout to a specific folder or page.

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div
      className="
      h-screen
      p-6 flex 
      justify-center"
    >
      {/* <LoginPage/> */}
      {children}
    </div>
  );
};

export default Template;
