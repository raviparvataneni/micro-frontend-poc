import React, { useEffect } from 'react';

const ReactChildWrapper = () => {
    useEffect(() => {
        import('reactChild/ReactChildWC');
    }, []);

    return (
        <div>
            <react-child />
        </div>
    );
};

export default ReactChildWrapper;