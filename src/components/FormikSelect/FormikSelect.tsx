import { ErrorMessage, Field } from 'formik';
import React from 'react';

type Props = {
    id: number;
    name: string;
}[];

function FormikSelect(props: Props) {
    return (
        <div>
            {props.map((prop) => (
                <div key={prop.id}>
                    <Field as="select" name={prop.name} className="form-select">
                        <option value={prop.id}>{prop.name}</option>
                    </Field>
                    <ErrorMessage name={prop.name} component="div" />
                </div>
            ))}
        </div>
    );
}

export default FormikSelect;
