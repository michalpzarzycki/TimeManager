


describe('Test getUserNotes', () => {
    test("It has been called one time", () => {
    })
})

// function greetWorld(greettingFn)  {
//     return greettingFn('world');
//   }
  
//   test('greetWorld calls the greeting function properly', () => {
//     const greetImplementation = name => `Hey, ${name}!`;
//     const mockFn = jest.fn(greetImplementation);
//     const value = greetWorld(mockFn);
//     expect(mockFn).toHaveBeenCalled();
//     expect(mockFn).toHaveBeenCalledWith('world');
//     expect(value).toBe('Hey, world!');
//   });
//   function getUserNotes() {
//     return Promise.resolve([{},{},{}])
//   }
//   test("Tested getUserNotes", async () => {
//     const mockFn = jest.fn(getUserNotes)
//     const value = await mockFn()
//     expect(value).toStrictEqual([{},{},{}])
//     expect(mockFn).toHaveBeenCalled();
//   })

//   function getUserNotes(userId: any) {
//     return new Promise((resolve, reject) => {
//         db.collection('notes').where('userId', '==', userId).onSnapshot(snapshot => {
//             let arr: any[] = []
//             snapshot.forEach(doc => arr.push(doc.data()))
//             resolve(arr)
//         })
//     })
// }