import { NotificationBody } from "../Service/Entities/Notification"

interface NotificationProps {
    notifications: NotificationBody[];
}

function NotificationWindow({ notifications }: NotificationProps) {
    return (
        <div className="fixed w-96 pr-10 pl-10 pb-10 pt-2 mt-20 inset-0 z-50 flex justify-self-end justify-center">
            <div className="bg-wheat p-4 w-full rounded-md shadow-2xl">
                <h2>Notificações</h2>

                {notifications.map((e, index) => (
                    <div key={index} className="h-12 bg-red-500 rounded">
                        <p>{e.nomeCliente}</p>
                        <p>{e.produto}</p>
                        <p>{e.quantidade}</p>
                    </div>
                ))};
            </div>
        </div>
    );
}

export default NotificationWindow;