interface InfoMessageProps {
    title: string;
    content: string;
}

export default function InfoMessage({ title, content }: InfoMessageProps) {
    return (
        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p className="font-bold">{title}</p>
            <p className="text-sm">{content}</p>
        </div>
    );
}
