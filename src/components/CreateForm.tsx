import { useMemo } from 'react';
import { useFormik } from 'formik';
import { AnyObjectSchema } from 'yup';

import { LoadingButton } from '@homework-task/components/LoadingButton';

export interface CreateFormProps<T extends object> {
    useMutation: () => {
        mutate: (values: T) => void;
        isLoading: boolean;
        isSuccess: boolean;
        isError: boolean;
    };
    validationSchema: AnyObjectSchema;
    renderForm: (formik: ReturnType<typeof useFormik<T>>) => React.ReactNode;
    successMessage?: string;
    errorMessage?: string;
}

export const CreateForm = <T extends object>({
    useMutation,
    validationSchema,
    renderForm,
    successMessage = 'Form Submitted Succesfully',
    errorMessage = 'Error Submitting Form',
}: CreateFormProps<T>) => {
    const { mutate, isLoading, isSuccess, isError } = useMutation();
    const initialValues = useMemo(
        () =>
            Object.fromEntries(
                Object.keys(validationSchema.fields).map((key) => [key, ''])
            ) as T,
        []
    );

    const formik = useFormik<T>({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            mutate(values);
            resetForm();
        },
    });

    const form = useMemo(() => renderForm(formik), [formik]);

    return (
        <form onSubmit={formik.handleSubmit}>
            {form}
            <LoadingButton isLoading={isLoading} type="submit">
                Submit
            </LoadingButton>
            {isSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                    {successMessage}
                </div>
            )}
            {isError && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
                    {errorMessage}
                </div>
            )}
        </form>
    );
};

export default CreateForm;
