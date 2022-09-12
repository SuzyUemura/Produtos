import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "./produto";

@Injectable()
export class ProdutosService{
    constructor(private http: HttpClient){}

        protected UrlServiceV1: string = "http://localhost:8080/api/";

        obterProdutos() : Observable<Produto[]>{
            return this.http.get<Produto[]>(this.UrlServiceV1 + "products")
        } 
}