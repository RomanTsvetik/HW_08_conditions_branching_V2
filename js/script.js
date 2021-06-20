let birthDate = prompt ('pls enter your date of birth?', '');
let city = prompt('what city do you live in?', '');
let country;
let sport = prompt('what is your favorite kind of sport?', '');
let champion;

if (birthDate, city, sport) {

    if (birthDate) {
        birthDate = `You were born on ${birthDate}`
    }else{
        birthDate = 'Pity you don"t want to tell us your date of birth';
    }

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

    if (city) {
        switch (city) {
            case ('Kiev'):
            case ('Moscow'):
            case ('Minsk'):
                city = `Hey, you live in the capital of ${country}`;
                break;
            default:
                city = `Hey, you live in ${city}`;
        }
    }

    else {
        city = 'Pity you don"t want to tell us your city';
    }

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

    switch (sport) {
        case 'Football':
        case 'Tennis':
        case 'Crossfit':
            sport = (`${champion}`);
            break;
        default:
            sport = 'Pity you don"t want to tell us your favorite kind of sport';
            break;
    }

    alert(birthDate + `; ` + city + `; ` + sport);
}

else {
    alert('Pity you don"t want to say us anything');
}