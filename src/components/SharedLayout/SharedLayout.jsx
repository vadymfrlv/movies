import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '../Box/Box';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Box>
      <Header />
      <Box padding="0 30px">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};
