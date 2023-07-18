'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
  '/writing': {
    name: 'writing',
  },
};

const Navbar = () => {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="bg:transparent mb-12">
      <div>
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all text-slate-200 hover:text-teal-300 flex align-middle',
                    {
                      'text-teal-400': isActive,
                    }
                  )}
                >
                  <span className="relative py-1 px-2">
                    {name}
                    {path === pathname ? (
                      <div className="absolute h-[1px] top-7 mx-2 inset-0 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900" />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
