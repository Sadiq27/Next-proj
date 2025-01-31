import { ItemProps } from "@/components/helpers/interfaces/items"

export async function searchProducts(query: string): Promise<ItemProps[]>{
    const response = await fetch(`${process.env.API_HOST}/items?q=${encodeURIComponent(query)}`)

    if (!response.ok) {
        throw new Error("Failed to fecth search products")
    }

    return response.json()
}