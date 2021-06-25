const retardedFunction = () => {
    return fetch("https://rickandmortyapi.com/api/character").then((victor) => {
        return victor.json();
    });
};

const myFunction = async () => {
    const result = await retardedFunction();

    console.log("imprimiendo result:", result);
};

// myFunction();

// ---- Async Await ----
const addItem = (item, list) => {
    return new Promise((resolve, reject) => {
        if (!list) {
            reject("No existe el array");
        }

        setTimeout(() => {
            list.push(item);

            resolve(list);
        }, 2000);
    });
};

const processFilm = async (newFilm, filmography) => {
    try {
        const result = await addItem(newFilm, null);
        console.log("result", result);
        const result2 = await addItem(newFilm, filmography);
        console.log("result2", result2);

        return result;
    } catch (error) {
        console.error("error ->", error);
    }
};

const filmography = ["Raising Arizona", "Fargo", "Barton Fink"];
// processFilm('End Game', filmography);

// ---- END Async Await ----

// ---- Promises ----
const addItemPromise = (item, list) => {
    return new Promise((resolve, reject) => {
        if (!list) {
            reject("No existe el array");
        }

        setTimeout(() => {
            list.push(item);

            resolve(list);
        }, 2000);
    });
};

const processFilmPromise = (newFilm, filmography) => {
    let result;

    addItemPromise(newFilm, filmography)
        .then((res) => {
            // Promesa resolved
            console.log("result", res);
            result = res;
        })
        .catch((error) => {
            // Promesa rejected
            console.error("error ->", error);
        });
    
    console.log('Console Log debajo de addItemPromise', result);
};

const filmographyPromise = ["Raising Arizona", "Fargo", "Barton Fink"];

// processFilmPromise("End Game", filmographyPromise);

// ---- END Promise ----



// ---- Doble Try Catch ----

const processFilmDoubleTryCatch = async (newFilm, filmography) => {
    try {
        const result = await addItem(newFilm, null);
        console.log("result", result);
    } catch (error) {
        console.error("error primer result->", error);
    }

    try {
        const result2 = await addItem(newFilm, filmography);
        console.log("result2", result2);

        return result;
    } catch (error) {
        console.error("error segundo result ->", error);
    }
};

const filmographyD = ["Raising Arizona", "Fargo", "Barton Fink"];
processFilmDoubleTryCatch('End Game', filmographyD);

// ---- END Doble Try Catch ----
