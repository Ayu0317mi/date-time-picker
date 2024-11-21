export interface ActionState<T> {
    success: boolean;
    message: string | null;
    data?: T;
}