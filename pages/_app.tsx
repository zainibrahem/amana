import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import Layout from '../layouts/layout';
import { AppProvider, useAppDispatch, useAppState } from '../contexts/app/app.provider';
import { AuthProvider } from '../contexts/auth/auth.provider';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import React, { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  
  return (
    <AppProvider>
      <AuthProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </AppProvider>
  ) 
}

