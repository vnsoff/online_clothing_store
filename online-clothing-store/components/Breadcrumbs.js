// components/Breadcrumbs.js

import { useRouter } from 'next/router';
import Link from 'next/link';

function Breadcrumbs() {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <nav className="px-4 mx-16 mt-10">
      <ul className="flex space-x-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((part, index) => {
          const isLast = index === pathnames.length - 1;
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1); // Capitalize the category
          return (
            <li key={part}>
              <span>/</span>
              {isLast ? (
                <span>&nbsp;{capitalizedPart}</span>
              ) : (
                <>
                  <span>&nbsp;</span>
                  <Link href={href}>{capitalizedPart}</Link>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;