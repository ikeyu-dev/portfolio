export async function test(username: string) {
    const config = useRuntimeConfig();
    const { data, error } = await useFetch(config.public.zenn_ENDPOINT + username);
    return data.value as string;
};