export interface BreedPreview {
    id: string;
    name: string;
    image: {
        url: string;
    }
};

export interface Breed {
    0: {
        url: string;
        breeds: [
            {
                name: string;
                description: string;
                life_span: string;
                origin: string;
                temperament: string;
                adaptability: number;
                affection_level: number;
                child_friendly: number;
                dog_friendly: number;
                energy_level: number;
                grooming: number;
                health_issues: number;
                intelligence: number;
                shedding_level: number;
                social_needs: number;
                stranger_friendly: number;
                vocalisation: number;
                experimental: number;
                hairless: number;
                natural: number;
                rare: number;
                rex: number;
                suppressed_tail: number;
                short_legs: number;
            }
        ]
    }
}