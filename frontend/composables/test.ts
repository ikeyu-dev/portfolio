export async function test() {
    const res = await fetch("https://zenn.dev/api/articles?username=uyuy_create");
    console.log(res.json());
}