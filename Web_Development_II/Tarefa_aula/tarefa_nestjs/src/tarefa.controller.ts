import { Body, Controller, Get, Put, } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { Tarefa } from "./tarefa.entity";
import { TarefaService } from "./tarefa.service";

@Controller()
export class TarefaController {

    constructor(
        private tarefaService: TarefaService
    ) {}
    
    @Get('/tarefa') 
    async listaTarefa() : Promise<Tarefa[]>{
        return await this.tarefaService.findAll();
    }

    @Get('/tarefa/:id')
    async buscarPorId(@Param() parametro): Promise<Tarefa> {
        console.log(parametro.id);

        return await this.tarefaService.findById(parametro.id);
    }

    @Delete('/tarefa/:id')
    async xcluirTarefa(@Param() parametro) {
        await this.tarefaService.excluir(parametro.id);
        return "ok";
    }

    @Put('/tarefa')
    async salvarTarefa(@Body() tarefa) {
       await this.tarefaService.salvar(tarefa);
        return 'Salvo';
    }
}