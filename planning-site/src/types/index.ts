export interface Task {
    ID: number;
    Name: string;
    Value: number;
}

export interface TaskList {
    ListOfTasks: Task[]
}