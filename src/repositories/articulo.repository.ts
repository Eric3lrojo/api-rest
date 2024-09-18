import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EricromanDataSource} from '../datasources';
import {Articulo, ArticuloRelations} from '../models';

export class ArticuloRepository extends DefaultCrudRepository<
  Articulo,
  typeof Articulo.prototype.ID,
  ArticuloRelations
> {
  constructor(
    @inject('datasources.Ericroman') dataSource: EricromanDataSource,
  ) {
    super(Articulo, dataSource);
  }
}
