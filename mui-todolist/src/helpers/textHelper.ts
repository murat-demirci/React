export class TextHelper {
    static RemoveWhiteSpace(word:string):string{
        const newWord:string[] = word.split(" ").filter((w)=>{
            if (w !== " ") {
                return w;
            }
        })
        return newWord.join(" ");
    }
}