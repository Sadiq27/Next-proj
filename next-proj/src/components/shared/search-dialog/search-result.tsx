import { ItemProps } from "@/components/helpers/interfaces/items";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import Image from "next/image";

interface SearchProductProps {
  result: ItemProps[];
  onSelect: (product: ItemProps) => void;
}

export default function SearchResult({ result, onSelect }: SearchProductProps) {
  return (
    <CommandGroup heading="Products">
      {result.map((prod) => (
        <CommandItem
          key={prod.id}
          value={prod.name}
          onSelect={() => onSelect(prod)}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "8px" }}
        >
          <Image src={prod.imageUrl} alt={prod.name} width={40} height={40} style={{ borderRadius: "5px" }} />
          <div>
            <p style={{ fontWeight: "bold" }}>{prod.name}</p>
            <p style={{ fontSize: "14px", color: "gray" }}>${prod.price}</p>
          </div>
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
