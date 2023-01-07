const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = []

newArray = array.map(function(elem){
    return elem *= elem
})

console.log(newArray);

const response =  [
            {
                "match_date": "2022-11-08 18:00:00",
                "result_score": "6:1"
            },
            {
                "match_date": "2022-10-12 13:00:00",
                "result_score": "0:7"
            },
            {
                "match_date": "2022-10-07 17:00:00",
                "result_score": "5:1"
            },
            {
                "match_date": "2022-01-29 13:30:00",
                "result_score": "5:3"
            },
            {
                "match_date": "2022-01-25 16:30:00",
                "result_score": "0:4"
            },
            {
                "match_date": "2022-01-21 19:30:00",
                "result_score": "1:3"
            },
            {
                "match_date": "2021-04-11 13:00:00",
                "result_score": "7:0"
            },
            {
                "match_date": "2021-04-07 17:00:00",
                "result_score": "0:3"
            },
            {
                "match_date": "2021-03-07 17:00:00",
                "result_score": "2:7"
            },
            {
                "match_date": "2021-03-03 18:30:00",
                "result_score": "3:2"
            }
        ]

results = response.map(function(elem){
    return {
        result: elem.result_score
    }
})

console.log(results);