import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getHome(@Res() res: Response) {
    res.send(`
      <h1>Test Technique - Backend</h1>

      <p>
        Vous trouverez ci-dessous le lien Swagger pour les endpoints demandés :
      </p>

      <ul>
        <li>
          <a href="https://tennis-api-ns20.onrender.com/swagger">
            Swagger Documentation
          </a>
        </li>

        <li>
          <a href="https://github.com/mrayman97/tennis-api">
            GitHub Repository
          </a>
        </li>
      </ul>

      <p>Merci.</p>
    `);
  }
}
