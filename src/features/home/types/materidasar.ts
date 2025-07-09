export interface ParticleData {
    description: string;
    example_sentence: string;
    id: number;
    particle_name: string;
    romaji: string;
    status: boolean;
}

export interface KatakanaData {
    character: string;
    id: number;
    romaji: string;
    status: boolean;
    type: string;
}

export interface HiraganaData {
    character: string;
    id: number;
    romaji: string;
    status: boolean;
    type: string;
}

export interface BasicConversationData {
    example_sentence: string;
    id: number;
    meaning: string;
    reading: string;
    status: boolean;
    type: string;
    word: string;
}