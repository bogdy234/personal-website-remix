interface AlertProps {
    title: string;
    content: string;
}

export default function Alert({ title, content }: AlertProps) {
    return (
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">{title}</p>
            <p>{content}</p>
        </div>
    );
}
