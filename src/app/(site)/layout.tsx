// import Header from '@/components/landing-page/header';
import React from 'react';

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* <Header />  -->  Instead of this we are using seperate children container for the same*/}  
      {children}
    </main>
  );
};

export default HomePageLayout;
