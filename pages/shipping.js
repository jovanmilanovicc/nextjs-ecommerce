import { useRouter } from 'next/router';
import React from 'react'

function Shipping() {
    const router = useRouter();
    router.push('/login');
  return (
    <div>shipping</div>
  )
}

export default Shipping;
