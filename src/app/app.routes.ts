import { Routes } from '@angular/router';
import { InterfaceComponent} from './interface/interface.component';

export const routeConfig: Routes = [
  { path: ':userID', component: InterfaceComponent },
];

export default routeConfig;
