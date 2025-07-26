// Interface que define cómo deben ser los datos para actualizar una tarea
export interface UpdateTask {
  title?: string;   // Título opcional (el ? significa que puede estar o no)
  status?: boolean; // Estado opcional (el ? significa que puede estar o no)
}
