import { Routes } from '@angular/router';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: "", component:  PaginaInicialComponent },
  { path: "login", component: LoginComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: 'pagamento', component: PagamentoComponent }
];
