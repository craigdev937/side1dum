export type MODE = "light" | "dark";

export interface ITheme {
    mode: MODE
};

export interface IRecipe {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
};

export interface IRecData {
    total: number,
    skip: number,
    limit: number,
    recipes: IRecipe[]
};




