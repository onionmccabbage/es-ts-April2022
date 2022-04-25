// basic types
{
    const fn = (x:number):string => {
        return `${x}`
    }
}
{
    // enums - enumerate over these - can be one of these
    enum BoxSize {
        Small,
        Medium
    }
    // enums are open ended
    enum BoxSize {
        Large=2,
        XLarge,
        XXLarge
    }

    // use our code
    let boxType = BoxSize.Small
    boxType++
    boxType++
    boxType++

    console.log(boxType)
}

{
    // bit flags
    const enum CategoryFlags {
        None   = 0, // this is the default anyway
        Music  = 1,
        News   = 2,
        Drama  = 4,
        Comedy = 8 // powers of two
    }//                             union is '|'
    const musicalComedy = CategoryFlags.Music | CategoryFlags.Comedy

    // now elsewhere we would check types using intersect (&)
    const hasMusic  = (musicalComedy & CategoryFlags.Music) // true (1)
    const hasNews   = (musicalComedy & CategoryFlags.News) // false (0)
    const hasDrama  = (musicalComedy & CategoryFlags.Drama) // false
    const hasComedy = (musicalComedy & CategoryFlags.Comedy) // true (8)

    console.log(hasMusic, hasNews, hasComedy)

}