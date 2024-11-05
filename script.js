// // Variable dan tipe data di dalam JS.

// // Variable di JS memiliki 3 tipe:
// /* let, const, var */
// let AdliPadangMerdeka // Bisa di ubah valuenya.
// var Adli_Padang_Merdeka // Sama aja tapi jadul.
// const AdliMerdeka = "" // Nilainya bersifat konstanta.

// // Tipe Data di JS
// let String = 'QWERTYUIOP' // Merupakan sebuah tipe data yang berupa text diawali dan diakhiri denga kutip.
// let Number = 1 // Merupakan tipe data yang berupa Angka, bilangan bulat atau desimal, bebas.
// let Bool = true // Tipe data yang hanya berisi true atau false.
// //   Index:    0        1     2
// let Array = [Number, String, Bool] // Sekumpulan data
// // Mengakses isi array:
// console.log(Array[0]) // Output: QWERTYUIOP

// let Obj = {
//     nama: 'Adli',
//     asal: 'GTP',
//     aseli: 'Padangay, Ngawi Utara',

// }

// // Operator Aritmatika
// /* +, -, /, *, %, **, ++, -- */
// let Tambah = 1 + 1 // Output: 2
// let Kurang = 1 - 1 // Output: 0
// let Kali = 1 * 1 // Output: 1
// let Bagi = 1 / 1 // Output: 1
// let Modulus = 1 % 1 // Output: 0
// let Pangkat = 2 ** 2 // Output: 8
// let Incr = ++1 // Output: 2
// let Decr = --1 // Output: 0

// // Operator Logika
// /* &&: And, ||: Or, !: Not */

// // Comparasion Opertator
// /* ==, ===, >, <, >=, <=, !=, !== */

// let a = 1 == 1 // True
// let b = 1 == '1' // True

// let c = 1 === '1' // False
// let d = 1 === 1 // True

// let e = 1 > 0 // True
// let f = 1 > 0 // False

// let g = 1 >= 1 // True
// let h = 1 <= 1 // True

// let i = 1 != 1 // False

// // Operator Assigment
// /* =, +=, -=, *=, /=, **= */

// // Conditional statement
// /* if else, ternary, switch */

// let NilaiSikap = 69

// // let Nilai = 999
// // switch (Nilai) {
// //     case 10:
// //         return 'Bego'
// //         break
// //     case 20:
// //         return 'Sedikit Bego'
// //         break
// //     case 50:
// //         return 'Alhamdulillah'
// //         break
// //     case 90:
// //         return 'Lulus'
// //         break
// //     case 999:
// //         return 'anjay'
// //         break
// //     default:
// //         return 'Nilai Tidak Valdi'
// // }

// let Nilai = 60
// let Hasil = Nilai <= 70 
//     ? "C" 
//     : Nilai <= 85 && Nilai >= 71 
//         ? "B" 
//         : "A"

// console.log(Hasil)


//  nilai 90, Output A - C

// Looping di JS ada 3
/* for loop, while loop, dowhile loop. */

for (let i = 1; i <= 100; i++) 
    {
        if((i % 3 ==0 ) && ( i % 5 ==0))
        {
            console.log ("fizz buzz");
        }
             if(i % 3 ==0 )
        {
            console.log ("fizz");
        }
        else if ( i % 5 ==0)
            {
             console.log ("buzz");
        }
        else{
            console.log(i);
        }
}

// let i = 6z

// while (i <= 5) {
//         console.log(i);
//         i++
//     }
    
// do {
    // i++
    // console.log(i);
// } while (i <= 5);

/* 
1 - 100
if genap = fizz
if ganjil = buzz
if ganjil && genap = fizz buzz
*/


