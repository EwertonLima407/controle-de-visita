
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface Visita {
  id?: number,
  nome: string;
  cpf: string;
  destino: string;
  nomeRecebedor: string;
  origem: string;
  data?: Date;
  hora?: Date;
}

const ELEMENT_DATA: Visita[] = [
  {id: 1, nome: 'maria antonieta', cpf: '123.456.789-12', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura de recife', },
  {id: 2, nome: 'don pedro', cpf: '123.456.789-13', destino: 'Casa civil', nomeRecebedor: 'mario', origem: 'prefeitura de olinda', },
  {id: 3, nome: 'guilherme andrade', cpf: '123.456.789-14', destino: 'Casa militar', nomeRecebedor: 'mario', origem: 'prefeitura jaboatao', },
  {id: 4, nome: 'Rafa brandao', cpf: '123.456.789-15', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura', },
  {id: 5, nome: 'ramo dino', cpf: '123.456.789-16', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura', },
  {id: 6, nome: 'otacilio', cpf: '123.456.789-17', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura', },

];

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css'],

})
export class VisitaComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'destino', 'nomeRecebedor', 'origem', 'data', 'hora'];
  dataSource = new MatTableDataSource<Visita>(ELEMENT_DATA);

  clickedRows = new Set<Visita>();

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator | any ;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Itens por páginas:';
    this.paginator._intl.nextPageLabel = 'Próxima';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.firstPageLabel = 'Primeira página';
    this.paginator._intl.lastPageLabel = 'Última página';
  }
}
