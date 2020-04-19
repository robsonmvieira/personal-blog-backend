import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export default class AddCategoryInPostTables1587318232382 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn('posts',
      new TableColumn({
        name: 'category_id',
        type: 'uuid'
      }))
    await queryRunner.createForeignKey('posts',
      new TableForeignKey({
        name: 'categoryPost',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'SET NULL'
      }))
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('posts', 'categoryPost')
    await queryRunner.dropColumn('posts', 'category_id')
  }
}
