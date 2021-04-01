import React, { FC } from 'react';
import ErrorsComponent from '../src/components/errors-component';

const NotFound: FC = () => {
    const message = "404 - Not found"

    return <ErrorsComponent message={message} />
}

export default NotFound;