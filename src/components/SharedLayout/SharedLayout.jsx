import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from 'components/Box/Box';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

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
