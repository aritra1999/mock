export const GET = () => {
    return new Response(JSON.stringify({
        message: 'pong'
    }));
}