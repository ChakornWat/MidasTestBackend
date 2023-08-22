function plusScore(input:string):number{
    if(input == "A"){
                return 11;
            }
            else if(input == "J" ||input == "Q"||input == "K"){
                return 10;
            }else return Number(input);
}

function suiteCheck(input:string[]):boolean{
    if(input[0] == input[1] && input[0] == input[2]) return true
    return false;
}

function getHandScore(input:string):number{
    let array = input.split(" ");
    let card:string[] = [];
    let D = 0 , C = 0 , H = 0, S = 0;

    
    for(let index in array){
        if(array[index].charAt(0)== "D"){
            let score= array[index].split("D");
            D += plusScore(score[1]);
            card.push(score[1]);
        }
        else if(array[index].charAt(0)== "C"){
            let score= array[index].split("C");
            C += plusScore(score[1]);
            card.push(score[1]);
        }
        else if(array[index].charAt(0)== "H"){
            let score= array[index].split("H");
            H += plusScore(score[1]);
            card.push(score[1]);
        }
        else if(array[index].charAt(0)== "S"){
            let score= array[index].split("S");
            S += plusScore(score[1]);
            card.push(score[1]);
        }
    }

    if(suiteCheck(card)){
        if(card[0]=="A") return 35;
        else return 32.5;
    }else return Math.max(D,C,H,S);
}

console.log(getHandScore("S3 H3 C3"));