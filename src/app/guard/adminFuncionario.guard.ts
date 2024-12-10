import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { inject } from '@angular/core';
import { userType } from '../models/user.model';

export const adminFuncionarioGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.hasPermission(userType.ADMIN, userType.FUNCIONARIO)) {
    alert("Você não tem permissão pra acessar essa página!");
    router.navigate(['/biblioteca']);
    return false;
  }

  return true;
};

