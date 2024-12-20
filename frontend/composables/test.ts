export async function test(username: string) {
    const config = useRuntimeConfig();
    const response = await useFetch(config.public.zenn_ENDPOINT + username);
    return response;
};