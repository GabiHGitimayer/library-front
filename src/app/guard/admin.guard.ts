import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { inject } from '@angular/core';
import { userType } from '../models/user.model';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(!authService.hasPermission(userType.ADMIN)) {
    alert("Você não tem permissão pra acessar essa página!");
    router.navigate(['/biblioteca/usuarios']);
    return false;
  }

  return true;
};
