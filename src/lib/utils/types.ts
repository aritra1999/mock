export interface MetaRoute {
    name: string;
    path: string;
    tags: string[];
    operationId: string;
    response: Record<string, any>;
    security: Record<string, any>[];
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'get' | 'post' | 'put' | 'delete';  
};

