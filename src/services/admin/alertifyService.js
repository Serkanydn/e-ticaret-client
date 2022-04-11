import alertify from 'alertifyjs';

export default class AlertifyService {

    message = (message,  messageType = AlertifyMessageType.message, position =AlertifyPosition.bottomRight, delay = 3, dismissOthers = false ) => {
        alertify.set('notifier', 'position', position);
        alertify.set('notifier', 'delay', delay);
        const msj = alertify[messageType](message);
        if (dismissOthers)
            msj.dismissOthers();
    }

    dismiss = () => {
        alertify.dismissAll();
    }

}

export class AlertifyOptions {
    constructor(messageType, position, delay, dismissOthers) {
        this.messageType = messageType;
        this.position = position;
        this.delay = delay;
        this.dismissOthers = dismissOthers;
    }

}

export const AlertifyMessageType =
{
    success: 'success',
    error: 'error',
    warning: 'warning',
    notify: 'notify',
    message: 'message'
}

export const AlertifyPosition =
{
    topRight: 'top-right',
    topCenter: 'top-center',
    topLeft: 'top-left',
    bottomRight: 'bottom-right',
    bottomCenter: 'bottom-center',
    bottomLeft: 'bottom-left'
}



