import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { Jhtest9AppModuleNgFactory } from '../../../../build/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(Jhtest9AppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
