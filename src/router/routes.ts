import { RouteRecordRaw } from 'vue-router';

import { routes as children } from 'vue-router/auto/routes'

console.log('children',children)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;


export function createMenus(routes?:RouteRecordRaw[]):Menu[]{
  // @ts-ignore
  return routes?.map((route)=>({
    path:route.path,
    title:route.name,
    icon:'',
    children: createMenus(route.children)
  }))
}

export function generateMenus(){
  return createMenus(children)
}

export interface Menu {
  path: string;
  title: string;
  icon: string;
  children?: Menu[];
}