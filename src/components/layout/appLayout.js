import React, { createContext, useContext } from 'react';
export const PageCtx = createContext({});

export const usePageContext = () => useContext(PageCtx);

const PageLayout = () => {
    return (
        <PageCtx.Provider></PageCtx.Provider>
    );
};
export default PageLayout;
