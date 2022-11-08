export enum LoadingStatus {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERORR = 'ERROR',
}

export interface State {
    status: LoadingStatus;
    error: string | null;
}

export type LocationStateType = {
    from: { pathname: string; search: string };
};
