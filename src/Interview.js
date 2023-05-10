import React from 'react'

function Interview() {
    // let a = [1, 23, 4, 5, 654, 3, 2, 34, 5, 6]
    //  a.length = 3
    // console.log(a)                                  
    //                                                           cut array of lenght


    // let a = [1, 23, 4, 5, 654, 3, 2, 34, 5, 6]
    // let b = a.reduce((x, y) => { 
    //     return x + y })   
    // console.log(b)                                      
    //                                                                    sum of array  


    // let a = [1, 23, 4, 5, 654, 3, 2, 34, 5, 6]
    // let b = [...new Set(a)]
    // console.log(b)              
    //                                                         remove duplicate value in arrayy


    // let x = 12;
    // let y = 11;
    // [x, y] = [y, x]
    // console.log(x, y)                              
    //                                                         destructig value  swap


    // let a = 10;
    // let b = 20;
    // let c = 30;

    // [b, c] = [c, b]
    // console.log(a, b, c)                               
    //                                                                 destructig value  swap


    // for (var i = 0; i < 3; i++) {

    //     setTimeout(() => console.log(i), 1000)
    // }
    //                                    this function return 333 because var is work on global level


    // for (let i = 0; i < 3; i++) {

    //     setTimeout(() => console.log(i), 1000)
    // }
    //                                        this function return 0 1 2 0 1 2 because let is work on block level


    // console.log(!"sonu")

    //           ! sign negition of value string opposite is false


    // console.log(typeof (!!"sonu"))

    //            !! sign negition of  value  postive sign is return true mean (string)


    // let a = { name: "sonu" }

    // let b ;

    //     b = a
    // a.name = "chhimpa"
    // console.log(b)
    //                              answer is chhimpa

    const sum = eval('12-12+3')
    console.log(sum)



    return (
        <div>Interview</div>
    )
}

export default Interview