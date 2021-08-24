export interface Task {
    ID: number;
    Name: string;
    Value: number;
}

export interface TaskList {
    ListOfTasks: Task[]
}

export interface TaskCompare {
    FirstTask: Task;
    SecondTask: Task;
}

export interface TaskCompareList {
    ListOfCompareTasks: TaskCompare[];
}