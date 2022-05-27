import { lazy } from 'react';

// Interfaces
import { IRouteProps } from '../../shared/components/router/access.route';

/** Path principal del modulo. */
export const licenciaPath = '/tramites-servicios/licencia';
export const tramiteServicePath = '/tramites-servicios';
export const tramiteAdmin = '/tramites-administrador';
export const updatepath = '/modificar';
export const validaciondoc = '/validardocumento';

export const tramiteServiceReport = '/reportes/rayosx';

// LazyLoad Pages


//const LicenciaPruebaPage = lazy(() => import('../pages/gestion-tramite/gestion-inhumacion.page'));

export const LicenciaRoutes: IRouteProps[] = [
  /*
  {
    path: `${licenciaPath}/gestion-inhumacion`,
    component: LicenciaPruebaPage
  }
  */
];
