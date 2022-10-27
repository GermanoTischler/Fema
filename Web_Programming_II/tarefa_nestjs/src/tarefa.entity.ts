import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tarefa'})
export class Tarefa {
    @PrimaryGeneratedColumn({name: 'id'})
    id?: number;
    @Column({name: 'descricao', type: 'varchar', length: 100})
    descricao?: string;
}