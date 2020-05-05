import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'

export class AddUserIdToPostTable1588091484450 implements MigrationInterface {
  name = 'AddUserIdToPostTable1588091484450'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('posts',
      new TableColumn({
        name: 'user_id',
        type: 'uuid'
      })
    )
    await queryRunner.createForeignKey('posts',
      new TableForeignKey({
        name: 'userPost',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL'
      }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('posts', 'userPost')
    await queryRunner.dropColumn('posts', 'user_id')
  }
}
