import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tarefa } from "./tarefa.entity";

@Injectable()
export class TarefaService {

    constructor(
        @InjectRepository(Tarefa)
        private readonly tarefaRepository: Repository<Tarefa>,
    ) { }

    public findAll(): Promise<Tarefa[]> {
        return this.tarefaRepository.find();
    }

    public findById(id: number): Promise<Tarefa> {
        return this.tarefaRepository.findOneBy({ id });
    }

    public salvar(tarefa: Tarefa): Promise<Tarefa> {
        return this.tarefaRepository.save(tarefa);
    }

    public async excluir(id: number): Promise<void> {
        await this.tarefaRepository.delete(id);
    }
}
