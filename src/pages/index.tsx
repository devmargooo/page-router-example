// import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((c) => c + 1);
  }, []);
  return (
    <div className='wrapper'>
      <p>{count}</p>
      {/* <Link prefetch={false} href='/testpage'>
        TestPage
      </Link> */}
    </div>
  );
}
