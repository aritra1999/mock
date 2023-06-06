export interface MetaRoute {
    name: string;
    path: string;
    tags: string[];
    operationId: string;
    response: Record<string, any>;
    security: Record<string, any>[];
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'get' | 'post' | 'put' | 'delete';  
};

export interface Parameter {
    name: string;
    description: string;
    required?: boolean;
    nullable?: boolean;
    schema: {
        type: string;
        enum?: string[];
        format?: string; 
    }
}