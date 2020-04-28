import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class createComments1587435056367 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'content',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()'
          }
        ]
      })
    )
    await queryRunner.createForeignKey('comments',
      new TableForeignKey({
        name: 'commentPost',
        columnNames: ['id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'posts',
        onDelete: 'CASCADE'
      }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('comments', 'commentPost')
    await queryRunner.dropTable('comments')
  }
}
