const enhancer = require('./enhancer.js');
const { succeed } = require('./enhancer.js')

// test away!
 
// Enhancer test suite/group

describe('enhancer module', () => {
    
});

    // Succeed test suite/group
    describe('succeed function', () => {
        it('The item\'s enhancement increases by 1', () => {
            
            // Arrange
            const expected = {
                name: "big sword",
                durability: 100,
                enhancement: 13
            };

            // Act 
            const item = {
                name: "big sword",
                durability: 100,
                enhancement: 12  
            };

            // Assert
            expect(succeed(item)).toEqual(expected);
        });

        // Test
        it('If the item enhancement level is 20, the enhancement level is not changed', () => {
            
            // Arrange
            const expected = {
                name: "big sword",
                durability: 100,
                enhancement: 20
            }

            // Act
            const item = {
                name: "big sword",
                durability: 100,
                enhancement: 20
            };

            // Assert 
            expect(succeed(item)).toEqual(expected)
        });
    });