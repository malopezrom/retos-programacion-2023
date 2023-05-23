/*
* Crea un programa que analice texto y obtenga:
    * - Número total de palabras.
* - Longitud media de las palabras.
* - Número de oraciones del texto (cada vez que aparecen un punto).
* - Encuentre la palabra más larga.
*
* Todo esto utilizando un único bucle.
*/



/**
 * Función que analiza un texto y obtiene:
 * - Número total de palabras.
 * - Longitud media de las palabras.
 * - Número de oraciones del texto (cada vez que aparecen un punto).
 * - Palabra más larga.
 */
function analyzeText(text: string): void {
    const wordsRegex: RegExp = /\p{L}+[\p{L}',@!.-]*/u;
    const sentenceRegex: RegExp = /\p{L}+[\p{L}',@!.-]*\.+/u;
    const words: string[] = text.replace("\n", " ").split(" ");
    let sentences: number = 0;
    let longestWord: string = "";
    let length: number = 0;
    let size: number = 0;

    words.forEach((word: string) => {
        if (wordsRegex.test(word)) {
            size++;
            if (sentenceRegex.test(word)) {
                sentences++;
            }
        }
        length += word.length;
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    const averageLength: number = Math.floor(length / size);

    console.log(`Total de palabras: ${size}`);
    console.log(`Longitud media: ${averageLength}`);
    console.log(`Numero de frases: ${sentences}`);
    console.log(`Palabra mas larga: ${longestWord}(${longestWord.length})`);
}


analyzeText(`   la luna asoma: federico garcía lorca
                           cuando sale la luna
                           se pierden las campanas
                           y aparecen las sendas
                           impenetrables.
                           cuando sale la luna,
                           el mar cubre la tierra
                          y el corazón se siente
                           isla en el infinito.
                           nadie come naranjas
                           bajo la luna llena.
                           es preciso comer
                           fruta verde y helada.
                           cuando sale la luna
                           de cien rostros iguales,
                           la moneda de plata
                           solloza en el bolsillo.`)
