import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordUser1780616647950 implements MigrationInterface {
    name = 'AddPasswordUser1780616647950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "passwordHash" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "passwordHash"`);
    }

}
