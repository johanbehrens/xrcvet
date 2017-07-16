const appName = 'InTouch';

export default function buildActionName(fileName = '', actionName = '') {
    fileName = fileName.toString().trim();
    if (!fileName) {
        throw new Error('File name cannot be blank');
    }
    actionName = actionName.toString().trim();
    if (!actionName) {
        throw new Error('Action name cannot be blank');
    }
    return appName + '/' + fileName + '/' + actionName;
}
