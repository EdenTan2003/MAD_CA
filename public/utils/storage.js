import AsyncStorage from '@react-native-async-storage/async-storage';

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('currentUser').then(value => {
            resolve(JSON.parse(value));
        }).catch(error => {
            reject(error);
        });
    });
}

export function updateUser({
    id,
    profile_pic_uri,
    name,
    username,
    bio
}) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('users').then(users => {

            const parsedUsers = JSON.parse(users);
            const user = parsedUsers.find(user => user.id === id);

            user.profile_pic_uri = profile_pic_uri;
            user.name = name;
            user.username = username;
            user.bio = bio;

            AsyncStorage.setItem('users', JSON.stringify(parsedUsers)).then(() => {
                AsyncStorage.setItem('currentUser', JSON.stringify(user)).then(() => {
                    resolve(user);
                });
                console.log(user);
            }).catch(error => {
                reject(error);
            });
        });
    });
}