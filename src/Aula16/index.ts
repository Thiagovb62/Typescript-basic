type verifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
    user.username == sentValue.username && user.password == sentValue.password
  );
};

const User1 = { username: 'user1', password: '123456' };
const User2 = { username: 'user1', password: '123456' };

const loggedIn = verifyUser(User1, User2);
console.log(loggedIn);
