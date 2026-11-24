import React from "react";
import { Link } from "react-router";
import classes from "./Recipes.module.css";
import { DAPI } from "../../global/DAPI";
import { Spinner } from "../../components/spin/Spinner";

export const Recipes = () => {
    const { error, isLoading, data } = DAPI.useRecQuery();
    const REC = data?.recipes;

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
            {isLoading ? (
                <Spinner />
            ) : (
                <main className={classes.grid}>
                    {REC && REC.map((rec) => (
                        <Link key={rec.id} to={`/recipes/${rec.id}`} className={classes.card}>
                            <h2 className={classes.name}>{rec.name}</h2>
                            <img className={classes.image} src={rec.image} alt={rec.name} />
                        </Link>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};