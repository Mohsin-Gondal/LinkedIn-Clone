
let Countries = [];
let url = `https://restcountries.com/v3.1/all`;

async function getLanguages() {
    return new Promise((resolve, reject) => {
        console.log("Getting Countries Data....");
        fetch(url).then((result) => {
            return result.json();
        })
            .then((counties_raw) => {
                Countries = counties_raw;
                for (const country of counties_raw) {
                    for (const lang in country.languages) {
                        Languages_Array.push(country.languages[lang]);
                    }
                }
                resolve(Languages_Array);
            })
            .catch((e) => {
                console.log(e);
                reject(e);
            });
    })
}
