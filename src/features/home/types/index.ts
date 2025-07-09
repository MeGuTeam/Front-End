export type KelasTampilanDepan = {
    alt: string;
    title: string;
    description: string;
    handling: string;
}

export type LevelMateri = {
    title: string;
    description: string;
    handling: string;
    estimatedTime: string;
    topics: string[];
    order: number;
    isAvailable: boolean;
}

type ListDaftarMateriN5 = {
    id: number;
    name: string;
    handling: string;
}

export type DaftarMateriN5 = {
    id: number;
    kategori: string;
    list: ListDaftarMateriN5[];
}