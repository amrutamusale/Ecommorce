import { userComponent } from "../user/user.component";
import { HomeComponent } from "../home/home.component";

export const MainRoutes= [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'user',loadChildren:()=>import('../user/user.module').then(m=>m.UserModule)},
];