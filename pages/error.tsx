import React, { FC } from 'react';
import ErrorsComponent from '../src/components/errors-component';

const ErrorPage: FC = () => {
    const message = "An error occurred - Please try again";

    return <ErrorsComponent message={message} />
}

export default ErrorPage;