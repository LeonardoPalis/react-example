export const writePermissionRoles = ['admin', 'super_user', 'owner'];

export function getWritePermissionUser(users) {
    const writePermissionUsers = users.filter(user => writePermissionRoles.includes(user.role));
    return writePermissionUsers;
}

