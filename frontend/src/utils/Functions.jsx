export function isEven(number) {
    return number % 2 === 0 ? true : false; 
}

export function sectionParagraph(title, pb){
    return (
        <p className={`text-6xl pl-7 pt-15 ${pb}`}>{title}</p>
    )
}