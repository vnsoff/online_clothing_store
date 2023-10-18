//components/AccountPage.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

function AccountPage() {
  const router = useRouter();

  useEffect(() => {
    if (!userAuthenticated) {
      router.push('/signin');
    }
  }, []);

  return (
  );
}

export default AccountPage;