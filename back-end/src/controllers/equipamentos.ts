import { log } from "console";
import { AppDataSource } from "../data-source";
import { Equipamentos } from "../entity/equipamento";
import { categoriaRepositorio } from "./categoria";
import { salasRepositorio } from "./sala";

export const equipamentosRepositorio = AppDataSource.getRepository(Equipamentos)

export const criarEquipamento = async (tipoEquipamento: string, equipamento: string, sla: Date, prioridade: number, numeroSala: number, categoriaID: number) => {
    try {
        const sala = await salasRepositorio.findOneBy({ numeroSala: numeroSala })
        const categoria = await categoriaRepositorio.findOneBy({ categoriaID: categoriaID })

        const novoEquipamento = new Equipamentos(tipoEquipamento, equipamento, sla, prioridade, sala, categoria)
        await equipamentosRepositorio.save(novoEquipamento)
        console.log('Equipamento cadastrado com sucesso');
        return equipamentosRepositorio
    } catch (error) {
        console.error('Ocorreu um erro na criação do equipamento', error);
    }
}

export const excluirEquipamento = async (equipamentoID: number) => {
    try {
        const equipamento = await equipamentosRepositorio.findOneBy({ equipamentosID: equipamentoID })
        if (equipamento) {
            await equipamentosRepositorio.remove(equipamento)
            console.log('Equipamento excluido com sucesso');
            return 1
        } else {
            console.log('Equipamento inexistente');
            return 0
        }
    } catch (error) {
        console.error('Ocorreu um erro para excluir o equipamento', error);
    }
}   

export const visualizarEquipamentos = async () => {
    try {
        const equipamentos = await equipamentosRepositorio.find()
        return equipamentos
    } catch (error) {
        console.error('Ocorreu um erro para visualizar os equipamentos', error);
    }
}