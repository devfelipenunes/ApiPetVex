import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    // Redireciona para a página de login do Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req: any, @Res() res: any) {
    // Aqui você pode acessar os detalhes do usuário autenticado
    const user = req.user;

    // Realize ações como criação de sessão, associação com um tutor, etc.
    // ...

    // Redireciona ou retorna uma resposta para o aplicativo
    res.redirect('http://localhost:3000/auth/google/callback');
  }
}
