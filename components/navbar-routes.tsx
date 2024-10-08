'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import SearchInput from './search-input';
import { isTeacher } from '@/lib/teacher';

export const NavbarRoutes = () => {
  const { userId } =  useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher'); //Проверка на режим преподавателя
  const isCoursePage = pathname?.includes('/courses');
  const isSearchrPage = pathname === "/search"

  return (
    <>

    {isSearchrPage && (
      <div className='hidden md:block'>
        <SearchInput />
      </div>
    )}
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isCoursePage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Выход
          </Button>
        </Link>
      ) : isTeacher(userId) ? (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Режим преподавателя
          </Button>
        </Link>
      ) : null}
      <UserButton afterSignOutUrl="/" />
    </div>
    </>
  );
};
