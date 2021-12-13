// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard } from '../render-utils.js';
import { renderDogDetail } from '../render-utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    '<a href="./detail/?id=2"><div class="dog-card"><p>snuffles</p><img src="./assets/humble.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let dog = {
        name:'snuffles',
        id:2,
        breed:'humble'
    };
    const actual = renderDogCard(dog).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, '');
});

test('testing dogDetail function', (expect) => {
    const expected = '<div class="dog-detail"><p class="name">rooty</p><img src="../assets/snickerdoodle.jpeg"><div class="age-and-breed"><p class="age">3 years old</p><p class="breed">snickerdoodle</p></div><p class="description">old</p></div>';
    let dog = {
        name: 'rooty',
        description: 'old',
        age: 3,
        breed: 'snickerdoodle'

    };
    const actual = renderDogDetail(dog).outerHTML;

    expect.equal(actual, expected, ''); 
});