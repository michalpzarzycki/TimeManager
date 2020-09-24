const {signInWithEmailAndPassword} =  require('./firebase')

 test('signInWithEmailAndPassword should login with correct email and password', async () => {

    const user = await signInWithEmailAndPassword('michal50166@wp.pl', '123456')
    expect(user.user).toBeTruthy()
    

 })