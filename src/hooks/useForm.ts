import { useEffect, useState } from 'react';

interface FormFields {
    [key: string]: string;
}

interface TypedFormFields {
    [key: string]: TypedValue;
}

type TypedValue = string | number | File;

/**
 *  Custom hook to process all kind of forms as a controlled component
 * * takes initial values and populates them
 * * if the initial values are changing, updates through useEffect
 * * provides handleChange method, which supports number, string and file input field types
 * * provides resetForm and clearForm methods
 * */
const useForm = (
    initial: FormFields = {},
): {
    inputs: TypedFormFields;
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
    resetForm: () => void;
    clearForm: () => void;
} => {
    // create an own state object for our inputs
    const [inputs, setInputs] = useState<TypedFormFields>(initial);

    // the initial state is checked by concatenating all values
    const initialValues = Object.values(initial).join('');

    // monitor if any variables are now defined and update the input fields
    useEffect(() => {
        // runs when the things we are watching change
        setInputs(initial);
    }, [initialValues]);

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        // get the input value, name and type fropm the target HTML element
        const { value, name, type } = e.currentTarget;

        let typedValue: TypedValue = value;

        // handle specific types individually
        if (type === 'number') {
            // directly parse integers
            typedValue = parseInt(value, 10);
        }
        if (type === 'file' && e.currentTarget.files) {
            // if it is a file, destructure the first file from target array
            typedValue = e.currentTarget.files[0];
        }
        // otherwise, directly handle as string

        // update all input fields
        setInputs({
            ...inputs,
            [name]: typedValue,
        });
    };

    /**
     * just reset to the initial values
     */
    const resetForm = (): void => {
        setInputs(initial);
    };

    /**
     * clear the form by providing empty strings to all fields
     */
    const clearForm = (): void => {
        const blankState = Object.fromEntries(
            Object.entries(inputs).map(([key, value]) => [key, '']),
        );
        setInputs(blankState);
    };

    return {
        inputs,
        handleChange,
        resetForm,
        clearForm,
    };
};

export default useForm;
