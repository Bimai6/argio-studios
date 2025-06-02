export function isEven(number) {
    return number % 2 === 0 ? true : false; 
}

export function sectionParagraph(title, pb){
    return (
        <div className="text-center flex justify-center">
            <p className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl pt-15 ${pb}`}>{title}</p>
        </div>
    )
}