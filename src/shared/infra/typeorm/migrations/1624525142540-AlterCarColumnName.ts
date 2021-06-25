import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarColumnName1624525142540 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars", "fine_amoun", "fine_amount");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars", "fine_amount", "fine_amoun");
  }
}
