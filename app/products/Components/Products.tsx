export interface PricingItem {
    id: number;
    name: string;
    description: string;
    amount: string;
}

export const features: string[] = [
    "Easy to configure",
    "Great Performance",
    "Open Source",
    "Post-Sale Support"
];

export const pricing: PricingItem[] = [
    { id: 1, name: "Drugsfarm", description: "Full purchase of Drugsfarm", amount: "€ 12.95" },
    { id: 2, name: "Garages", description: "Full purchase of Garages", amount: "€ 15" },

];

export const pricingTwo: PricingItem[] = [
    { id: 1, name: "Community Service", description: "Full purchase of Community Service", amount: "€ 20" },
    { id: 2, name: "Appartments", description: "Full purchase of Appartments", amount: "€ 20" },
]

export const pricingThree: PricingItem[] = [
    { id: 1, name: "Logging", description: "Full purchase of Logging", amount: "€ 20" },
    { id: 2, name: "Moneywashing", description: "Full purchase of Moneywashing", amount: "€ 20" },
]