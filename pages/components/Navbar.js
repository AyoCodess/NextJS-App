import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const router = useRouter();

  //- Navigate to another page on click. You can use router.replace to re-direct to the root directory.
  const handleClick = () => {
    console.log('placing order');
    router.push('/product');
  };

  return (
    <nav className='header'>
      <h1 className='logo'>
        <Link href='/'>NextAuth</Link>
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/product'>
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href='/product'>
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href='/users'>
            <a>Users</a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href='/news'>
            <a>News</a>
          </Link>
        </li>
        {/* //-about has no header, has its own layout */}
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <button type='button' onClick={handleClick}>
          Place Order
        </button>

        {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn('github');
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
