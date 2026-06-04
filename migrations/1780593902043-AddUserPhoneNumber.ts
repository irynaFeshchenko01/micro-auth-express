import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserPhoneNumber1780593902043 implements MigrationInterface {
    name = 'AddUserPhoneNumber1780593902043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
