export const GET = () => {
    return new Response(JSON.stringify({
        message: 'DB Connection OK'
    }));
}