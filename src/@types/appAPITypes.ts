import { Launch } from "./appTypes";

export interface QueryOptions {
    page: number,
    limit: number
}

export interface LaunchResponse {
    docs: Launch[],
    totalDocs: number,
    limit: number,
    totalPages: number,
    page: number,
    pagingCounter: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: number | null,
    nextPage: number | null
}