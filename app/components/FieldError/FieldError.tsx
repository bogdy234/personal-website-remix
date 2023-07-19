import { FC, ReactElement } from "react";

interface FieldErrorProps {
    errorsText?: string[];
}

const FieldError: FC<FieldErrorProps> = ({ errorsText }): ReactElement => {
    if (!errorsText?.length) {
        return <></>;
    }

    return (
        <>
            {errorsText.map((errorText) => (
                <p className="text-red-500 text-sm mt-2" key={errorText}>
                    {errorText}
                </p>
            ))}
        </>
    );
};

export default FieldError;
