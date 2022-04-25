{
    // literals
    type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista'
    let k:Kingdom
    k="Bacteria" // fine
    // k="Nonsuch"

    type Arbitrary = 'literaly this' | 10 | false // union of types
    let r:Arbitrary
    r="literaly this"
}
{
    // tuples - data type the members in order
    let poem:[number, boolean, string]  // this tuple only permits these data types in this order
    poem = [1, true, 'love']
    // handy for code completion
    console.log(poem[2].charAt(0), poem[0].toString())

}