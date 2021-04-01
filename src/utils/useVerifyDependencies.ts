import { useRouter } from 'next/router';
import React, { useReducer } from 'react';

const useVerifyDependencies = (deps: any[]):void | boolean => {
    const [depsAreOk, setDepsAreOk] = React.useState(false);
    const router = useRouter();
    
    setDepsAreOk(deps.every((d) => {
        return (Array.isArray(d) && d.length) || d;
    }))

    if (depsAreOk) {
        return depsAreOk;
    }

    router.push('/');

}

export default useVerifyDependencies;