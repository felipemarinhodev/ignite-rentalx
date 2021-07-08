import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarImagesColunmName1625739711931
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars_image", "create_at", "created_at");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars_image", "created_at", "create_at");
  }
}
