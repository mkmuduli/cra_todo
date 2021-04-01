import { setupServer } from 'msw/node';
import todo from './msw-todo';
export const handlers  = [
    ...todo
];

export const server = setupServer(...handlers);