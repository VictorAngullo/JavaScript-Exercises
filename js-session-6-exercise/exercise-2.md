8# Howarts, colegio de magia y hechicería

Este ejercicio será divertido, vamos a ir construyendo las casas del colegio Howarts.

> Es leviosa, no leviosá, –H. Granger

En el archivo `exercise-2.js` encontrarás una serie de funciones, tu tarea será completar todas las funciones para que cumplan con el comportamiento esperado. Además de implementarlas, tendrás que invocarlas par ir logrando los pasos del ejercio. Puede que tengas que crear bucles e invocar la función dentro de estos bucles.

1. Completa la función createHouse y utilízala para crear las 4 casas del colegio Howarts. Imprímelas por consola.

2. Una vez hayas creado las casas, añádelas todas al array `houses`. Esta función no se ha definido con argumentos, por lo tanto tendrás que usar el objeto `arguments`. Tal vez tengas que crear un array a partir del objeto `arguments` para poder iterar sobre el.

3. Ahora que ya tienes todas las casas dentro del array `houses`, implementa la función `searchCharacter`. Esta función  buscará sobre este array que contiene todas las casas y devolverá un array con todos los magos cuya inicial del nombre empiece por la letra seleccionada.

4. ¡Comienza un nuevo curso en Howarts! Albus Dumbledore te ha dado una lista llamada `newMembers` que contiene a los nuevos alumnos y junto a la casa que ha elegido el sombrero seleccionador para ellos.Itera sobre esta lista, implementa la función `addMember` y llámala por cada uno de los nuevos miembros. Esta función buscará en `houses` la casa correspondiente y añadirá al nuevo miembro.

5. ¡Hoy hemos tenido clase de historia de Howarts! Implementa la función `addFounder`. Esta función va a recibir cualquiera de las casas de Howarts, tendrás que buscar en el array de `houses` la casa correspondiente y añadir su fundador.