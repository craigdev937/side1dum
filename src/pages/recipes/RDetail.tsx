import React from "react";
import { Link, useParams } from "react-router";
import styles from "./RDetail.module.css";
import { DAPI } from "../../global/DAPI";
import { Spinner } from "../../components/spin/Spinner";

export const RDetail = () => {
    const { id } = useParams();
    const recipeId = Number(id);
    const { error, isLoading, data: rec } = DAPI.useRecByIdQuery(recipeId);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading || !rec ? (
                <Spinner />
            ) : (
                <main className={styles.detail}>
                    <Link to="/recipes" className={styles.back}>← Back to recipes</Link>
                    <h1 className={styles.title}>{rec.name}</h1>
                    <img className={styles.image} src={rec.image} alt={rec.name} />
                    <section>
                        <h2>Ingredients</h2>
                        <ul>
                            {rec.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h2>Instructions</h2>
                        <ol>
                            {rec.instructions.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </section>
                    <section className={styles.meta}>
                        <p>Prep: {rec.prepTimeMinutes} min</p>
                        <p>Cook: {rec.cookTimeMinutes} min</p>
                        <p>Servings: {rec.servings}</p>
                        <p>Difficulty: {rec.difficulty}</p>
                        <p>Cuisine: {rec.cuisine}</p>
                        <p>Calories/serving: {rec.caloriesPerServing}</p>
                        <p>Rating: {rec.rating} ({rec.reviewCount} reviews)</p>
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};