//Without a defined matcher, this one line applies next-auth to the entire project
export { default } from 'next-auth/middleware';

//App uses next-auth to only mathing routes - can be regex
export const config = { matcher: ["/myCourses", "/dashboard"]}