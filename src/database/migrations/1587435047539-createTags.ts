import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createTags1587435047539 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tags',
        columns:
        [{
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'title',
          type: 'varchar',
          isUnique: true
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
      }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tags')
  }
}
