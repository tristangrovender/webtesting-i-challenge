const enhancer = require('./enhancer.js');
const { repair, fail, succeed } = require('./enhancer.js')

// test away!
 
// Enhancer test suite/group

describe('enhancer module', () => {
    


    // Succeed test suite/group
    describe('succeed function', () => {

        // test
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

    // Fail test suite/group
    describe('fail function', () => {
        
        // test
        it('If the item\'s enhancement is less than 15, the durability of the item is decreased by 5', () => {
            
            // Arrange
            const expected = {
                name: "big sword",
                durability: 95,
                enhancement: 10
            };

            const item = {
                name: "big sword",
                durability: 100,
                enhancement: 10
            };

            // Assert
            expect(fail(item)).toEqual(expected);
        });

         // Test
         it('If the item\'s enhancement is 15 or more, the durability of the item is decreased by 10', () => {
             
            // Arrange
            const expected = {
                name: "big sword",
                durability: 90,
                enhancement: 15
            };

            const item = {
                name: "big sword",
                durability: 100,
                enhancement: 15
            };

            // Assert
            expect(fail(item)).toEqual(expected);
         });

         // Test
         it('If the item\'s enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).', () => {
             
            // Arrange
            const expected = {
                name: "big sword",
                durability: 90,
                enhancement: 17
            };

            const item = {
                name: "big sword",
                durability: 100,
                enhancement: 18
            };

            // Assert 
            expect(fail(item)).toEqual(expected);
         });
    });

    // Repair test suite/group
    describe('repair function', () => {
        
        // Test
        it('item durability should return to 100 after it\'s repaired', () => {
            
            // Arrange
            const expected = {
                name: "big sword",
                durability: 100,
                enhancement: 20
            };

            const item = {
                name: "big sword",
                durability: 5,
                enhancement: 20
            };

            // Assert 
            expect(repair(item)).toEqual(expected);
        
        });
    });
});