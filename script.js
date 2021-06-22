let userInfo = {};
let birthDate = prompt('pls enter your date of birth?', '');

/*birthday start*/
if (birthDate) {
    birthDate = `You were born on ${birthDate}`;          
    userInfo.birthDate = birthDate;

    /*city start*/
    let city = prompt('what city do you live in?', '');   
    if (city) {        
        let country;
        switch (city) {
            case 'Kiev':
                country = 'Ukraine';
                break;
            case 'Moscow':
                country = 'Russia';
                break;
            case 'Minsk':
                country = 'Belarus';
                break;
            default:
                break;
        }
            
        switch (city) {
            case ('Kiev'):
            case ('Moscow'):
            case ('Minsk'):
                city = `Hey, you live in the capital of ${country}`;
                break;
            case (city):
                city = `Hey, you live in ${city}`;
                break;
            default:
                break;
        }
        userInfo.city = city;
        
        /*sport start*/
        let sport = prompt('what is your favorite kind of sport?', '');  
        let champion;

        switch (sport) {
            case 'Football':
                champion = 'Cool, you want to become a new Messi!';
                break;
            case 'Tennis':
                champion = 'Cool, you want to become a new Federer!';
                break;
            case 'Crossfit':
                champion = 'Cool, you want to become a new Froning';
                break;
            default:
                break;
        }

        if (sport) {
            switch (sport) {
                case 'Football':
                case 'Tennis':
                case 'Crossfit':
                    sport = (`${champion}`);
                    break;
                default:
                    break;
            }
            userInfo.sport = sport;
            for (let key in userInfo) {
                console.log(userInfo[key]);
            }
            
        }
        else {
            sport = 'Pity you don"t want to tell us your favorite kind of sport';
            console.log(sport);
        }
        
    }
    else {
        city = 'Pity you don"t want to tell us your city';
        console.log(city);
    }
}

else {
        birthDate = 'Pity you don"t want to tell us your date of birth';
        console.log(birthDate);
}
