import {MigrationInterface, QueryRunner} from "typeorm";

export class recipeImageField1584903819768 implements MigrationInterface {
    name = 'recipeImageField1584903819768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" ADD "image" character varying`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "image"`, undefined);
    }

}
