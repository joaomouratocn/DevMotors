import styles from './styles.module.scss'

async function getPageData(pageid: string) {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/pages/${pageid}?populate=*`
        const response = await fetch(
            url, {
            next: { revalidate: 120 },
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.TOKEN_API}`,
                "Content-Type": "application/json",
            },
        })

        if (!response.ok) {
            const errorInfo = await response.text();
            console.error("Erro na requisição Strapi:", response.status, errorInfo);
            throw new Error(`Strapi retornou status ${response.status}`);
        }

        const json = await response.json()

        if (!json.data) {
            console.log('Estrutura inesperada')
            throw new Error('Resposta inesperada da API')
        }

        console.log(JSON.stringify(json.data, null, 2))

        const mapedObject = {

        }
    } catch (error) {
        console.error("Falha ao buscar dados home:", error);
        throw error;
    }
}

export default async function Page({ params }: { params: Promise<{ pageid: string }> }) {
    const pageId = (await params).pageid
    const dataPage = await getPageData(pageId)

    return (
        <main className={styles.main}>
            <h1>PAGE</h1>
        </main>
    )
}